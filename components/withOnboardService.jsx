import Auth0Web from 'auth0-web';
import validator from 'email-validator';
import {withRouter} from 'next/router';
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import ContentArea from '../components/ContentArea';
import CraftedByLogo from '../components/CraftedByLogo';
import Header from '../components/Header';
import NotificationManager from '../components/Notification/NotificationManager';
import config from '../config/auth0';
import OnboardClient from '../services/OnboardClient';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

const auth0Client = new Auth0Web({
  audience: config.audience,
  domain: config.domain,
  clientID: config.clientID,
  redirectUri: `${baseUrl}/callback`,
  responseType: 'token id_token',
  scope: 'openid email profile',
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
      const email = profile && profile.email ? profile.email : '';

      this.state = {
        authenticated,
        profile,
        email,
        agreeCopyright,
        agreePlagiarism,
      };

      auth0Client.subscribe((authenticated) => {
        const profile = authenticated ? auth0Client.getProfile() : null;
        const email = profile && profile.email ? profile.email : '';

        this.setState({
          authenticated,
          profile,
          email,
        });

        if (props.router.pathname === '/callback') props.router.push('/');
      });

      this.onboardClient = new OnboardClient(auth0Client);

      this.moveForward = this.moveForward.bind(this);
      this.stepBack = this.stepBack.bind(this);
      this.apply = this.apply.bind(this);
      this.toggleCopyright = this.toggleCopyright.bind(this);
      this.togglePlagiarism = this.togglePlagiarism.bind(this);
      this.updateEmail = this.updateEmail.bind(this);

      this.pagesOrder = ['/', '/authorship', '/copyright', '/plagiarism', '/agreement', '/payment', '/deadline', '/process', '/application'];
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

    apply() {
      if (!this.state.authenticated) return NotificationManager.danger(`Please, log in to apply to the Guest Author program.`);

      const email = this.state.email;
      if (!email || !validator.validate(email)) return NotificationManager.danger(`Please, enter a valid email address.`);

      const userId = auth0Client.getProfile().sub;
      const name = this.state.profile.name;
      this.onboardClient.apply({name, email, userId});

      NotificationManager.success(`Thanks for applying!`);
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

    updateEmail(email) {
      this.setState({
        email,
      });
    }

    render() {
      const {agreeCopyright, agreePlagiarism, authenticated, profile, email} = this.state;
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
            email={email}
            profile={profile}
            stepBack={this.stepBack}
            apply={this.apply}
            toggleCopyright={this.toggleCopyright}
            togglePlagiarism={this.togglePlagiarism}
            updateEmail={this.updateEmail}
          >
            {this.props.children}
          </WrappedComponent>
        </Container>
      )
    }
  });
};
