import React from 'react';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';

function index(props) {
  return (
    <React.Fragment>
      <Profile
        authenticated={props.authenticated}
        auth0Client={props.auth0Client}
        profile={props.profile}
      />
      <Presentation
        title="Introduction"
        actionLabel="Sign In"
        action={() => {props.auth0Client.signIn()}}
      >
        <p>
          The present website exists to support the Auth0 Guest Author Program.
          If you want to apply to this program, just click on the <em>Sign In</em> button to get started.
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(index);
