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
        title="Plagiarism"
        action={props.moveForward}
        actionLabel="Next"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          Plagiarism is an extremelly important subject. Authors must be aware that <strong>acting plagiarism is prohibited</strong>.
          To protect itself, Auth0 uses modern plagiarism checkers like <a href="https://www.quetext.com/">Quetext </a>
          and <a href="https://www.grammarly.com/">
          Grammarly</a> to check articles.
        </p>
        <p>
          Authors that copy excerpt from exist resources without adding credits, will no longer be able to participate
          in the program.
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
