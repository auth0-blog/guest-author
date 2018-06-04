import Auth0Web from 'auth0-web';
import {withRouter} from 'next/router';
import React from 'react';
import DevConfig from '../config/development.env';
import ProdConfig from '../config/production.env';

const config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig;

const auth0Client = new Auth0Web({
  audience: config.audience,
  domain: config.domain,
  clientID: config.clientID,
  redirectUri: config.redirectUri,
  responseType: 'token id_token',
  scope: 'openid profile',
});

export default (WrappedComponent) => {
  return withRouter(class extends React.Component {
    constructor(props) {
      super(props);

      const authenticated = auth0Client.isAuthenticated();
      const profile = authenticated ? auth0Client.getProfile() : null;

      this.state = {
        authenticated,
        profile,
      };

      auth0Client.subscribe((authenticated) => {
        console.log('how are you', authenticated);

        const profile = authenticated ? auth0Client.getProfile() : null;

        this.setState({
          authenticated,
          profile,
        });

        props.router.push('/introduction');
      });
    }

    render() {
      const {authenticated, profile} = this.state;
      return (
        <WrappedComponent
          auth0Client={auth0Client}
          authenticated={authenticated}
          profile={profile}
        >
          {this.props.children}
        </WrappedComponent>
      )
    }
  });
};
