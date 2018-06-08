import Auth0Web from 'auth0-web';
import {withRouter} from 'next/router';
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import ContentArea from '../components/ContentArea';
import CraftedByLogo from '../components/CraftedByLogo';
import Header from '../components/Header';
import config from '../config/auth0';
import OnboardClient from '../services/OnboardClient';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

const auth0Client = new Auth0Web({
  audience: config.audience,
  domain: config.domain,
  clientID: config.clientID,
  redirectUri: `${baseUrl}/callback`,
  responseType: 'token id_token',
  scope: 'openid profile',
});

// not nice
let agreeCopyright = false;
let agreePlagiarism = false;

export default (WrappedComponent) => {
  return withRouter(class extends React.Component {
    constructor(props) {
      super(props);

      const authenticated = auth0Client.isAuthenticated();
      const profile = authenticated ? auth0Client.getProfile() : null;

      this.state = {
        authenticated,
        profile,
        agreeCopyright,
        agreePlagiarism,
      };

      auth0Client.subscribe((authenticated) => {
        const profile = authenticated ? auth0Client.getProfile() : null;

        this.setState({
          authenticated,
          profile,
        });

        if (props.router.pathname === '/callback') props.router.push('/');
      });

      this.onboardClient = new OnboardClient(auth0Client);

      this.moveForward = this.moveForward.bind(this);
      this.stepBack = this.stepBack.bind(this);
      this.submitSample = this.submitSample.bind(this);
      this.toggleCopyright = this.toggleCopyright.bind(this);
      this.togglePlagiarism = this.togglePlagiarism.bind(this);

      this.pagesOrder = ['/', '/authorship', '/copyright', '/plagiarism', '/agreement', '/payment', '/deadline', '/process', '/sample'];
    }

    async componentDidMount() {
      auth0Client.subscribe(async (auth) => {
        if (!auth) {
          await auth0Client.checkSession();
        }
      });

      if (this.state.authenticated) return;

      await auth0Client.checkSession();
    }

    stepBack() {
      const {pathname} = this.props.router;
      const currentPosition = this.pagesOrder.indexOf(pathname);
      if (currentPosition < 1) return;

      this.props.router.push(`${this.pagesOrder[currentPosition - 1]}`);
    }

    moveForward() {
      const {pathname} = this.props.router;
      const currentPosition = this.pagesOrder.indexOf(pathname);
      if (currentPosition === this.pagesOrder - 1) return;

      this.props.router.push(`${this.pagesOrder[currentPosition + 1]}`);
    }

    submitSample(sample) {
      if (!this.state.authenticated) return;
      const {name, email} = this.state.profile;
      this.onboardClient.submitSample({name, email, sample});
    }

    toggleCopyright() {
      agreeCopyright = !this.state.agreeCopyright;
      this.setState({
        agreeCopyright,
      });
    }

    togglePlagiarism() {
      agreePlagiarism = !this.state.agreePlagiarism;
      this.setState({
        agreePlagiarism,
      });
    }

    render() {
      const {agreeCopyright, agreePlagiarism, authenticated, profile} = this.state;
      return (
        <Container>
          <Header>
            <ContentArea>
              <h1>The Guest Author Program</h1>
              <CraftedByLogo/>
            </ContentArea>
          </Header>
          <Breadcrumbs/>
          <WrappedComponent
            agreeCopyright={agreeCopyright}
            agreePlagiarism={agreePlagiarism}
            auth0Client={auth0Client}
            authenticated={authenticated}
            moveForward={this.moveForward}
            profile={profile}
            stepBack={this.stepBack}
            submitSample={this.submitSample}
            toggleCopyright={this.toggleCopyright}
            togglePlagiarism={this.togglePlagiarism}
          >
            {this.props.children}
          </WrappedComponent>
        </Container>
      )
    }
  });
};
