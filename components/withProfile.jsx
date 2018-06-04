import Auth0Web from 'auth0-web';
import React, {Component} from 'react';
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

class WithProfileWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      profile: null,
    };

    auth0Client.subscribe((authenticated) => {
      const profile = authenticated ? auth0Client.getProfile() : null;

      this.setState({
        authenticated,
        profile,
      });
    });
  }

  render() {
    const {authenticated, profile} = this.state;
    const WrappedComponent = this.props.wrappedComponent;
    return (
      <WrappedComponent
        auth0Client={auth0Client}
        authenticated={authenticated}
        profile={profile}
      />
    )
  }
}

export default (WrappedComponent) => {
  return (
    <WithProfileWrapper wrappedComponent={WrappedComponent} />
  )
};
