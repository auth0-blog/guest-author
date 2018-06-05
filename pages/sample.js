import React from 'react';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';

function Authorship(props) {
  return (
    <React.Fragment>
      <Profile
        authenticated={props.authenticated}
        auth0Client={props.auth0Client}
        profile={props.profile}
      />
      <Presentation
        title="Sample"
        action={() => {}}
        actionLabel="I Agree"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          This is the last step in the application process. You will have to answer just a few questions and write a small
          sample so we can evaluate you.
        </p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
