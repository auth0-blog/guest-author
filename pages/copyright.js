import React from 'react';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';

function Copyright(props) {
  return (
    <React.Fragment>
      <Profile
        authenticated={props.authenticated}
        auth0Client={props.auth0Client}
        profile={props.profile}
      />
      <Presentation
        action={props.moveForward}
        actionLabel="Next"
        title="Copyright"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          Regarding the copyright of the work, as Auth0 pays guest authors to research, develop, and write about
          different topics, authors are expected to <strong>give to Auth0 the following rights</strong>:
        </p>
        <ul>
          <li>the right to issue copies of the work to the public;</li>
          <li>the right to communicate the work to the public;</li>
          <li>the right to make an adaptation of the work;</li>
          <li>the right to rent or lend the work to the public;</li>
        </ul>
        <p>
          In other words, once Auth0 pays for an article, <strong>the author cannot publish it</strong> elsewhere
          without explicit consent from Auth0.
        </p>
      </Presentation>
    </React.Fragment>
  )
}

export default withOnboardService(Copyright);
