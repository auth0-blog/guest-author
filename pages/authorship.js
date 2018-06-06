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
        title="Authorship"
        action={props.moveForward}
        actionLabel="Next"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          First and foremost, Auth0 wants to make clear to authors that we will never decline <strong>your moral rights as an author</strong>.
          That is, you can rest assured that we will always attribute to you:
        </p>
        <ul>
          <li>the <strong>right of paternity</strong> of the work (you will always be identified as the original author);</li>
          <li>the <strong>right of integrity</strong> (we will never make derogatory amendments to your work);</li>
          <li>the right to <strong>object to false attribution</strong> (we will never attribute to you something you didn't created);</li>
        </ul>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
