import Auth0Web from 'auth0-web';
import Router, {withRouter} from 'next/router';
import React, {Component} from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import ContentArea from '../components/ContentArea';
import CraftedByLogo from '../components/CraftedByLogo';
import Header from '../components/Header';
import DevConfig from '../config/development.env';
import ProdConfig from '../config/production.env';
import OnboardClient from '../services/OnboardClient';
import withProfile from "./withProfile";

class App extends Component {
  constructor(props) {
    super(props);

    const config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig;

    this.onboardClient = new OnboardClient(
      'https://wt-0d41b47a3e54aad29a36abfdd5ef87ea-0.sandbox.auth0-extend.com/guest-author-program-dev',
      props.auth0Client,
    );

    this.moveForward = this.moveForward.bind(this);
    this.stepBack = this.stepBack.bind(this);
    this.submitSample = this.submitSample.bind(this);
    this.pagesOrder = ['/introduction', '/authorship', '/copyright', '/plagiarism', '/agreement', '/payment', '/deadline', '/process', '/sample'];

    this.state = {
      agreeCopyright: false,
      agreePlagiarism: false,
    };
  }

  async componentDidMount() {
    this.props.auth0Client.subscribe(async (auth) => {
      if (!auth) {
        await this.props.auth0Client.checkSession();
      }
    });

    if (this.props.authenticated) return;

    await this.props.auth0Client.checkSession();
  }

  toggleCopyright() {
    this.setState({
      agreeCopyright: !this.state.agreeCopyright,
    });
  }

  togglePlagiarism() {
    this.setState({
      agreePlagiarism: !this.state.agreePlagiarism,
    });
  }

  stepBack() {
    const {pathname} = this.props.location;
    const currentPosition = this.pagesOrder.indexOf(pathname.replace(process.env.PUBLIC_URL, ''));
    if (currentPosition < 1) return;

    this.props.history.push(`${this.pagesOrder[currentPosition - 1]}`);
  }

  moveForward() {
    const {pathname} = this.props.location;
    const currentPosition = this.pagesOrder.indexOf(pathname.replace(process.env.PUBLIC_URL, ''));
    if (currentPosition === this.pagesOrder - 1) return;

    this.props.history.push(`${this.pagesOrder[currentPosition + 1]}`);
  }

  submitSample(sample) {
    if (!this.props.authenticated) return;
    const { name, email } = this.props.profile;
    this.onboardClient.submitSample({ name, email, sample });
  }

  render() {
    return (
      <Container>
        <Header>
          <ContentArea>
            <h1>The Auth0 Guest Author Program</h1>
            <CraftedByLogo />
          </ContentArea>
        </Header>
        <Breadcrumbs />
        {this.props.children}
      </Container>
    );
  }
}

export default withProfile(withRouter(App));
