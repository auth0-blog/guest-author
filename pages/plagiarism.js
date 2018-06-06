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
          Another extremelly important subject is regarding plagiarism. Auth0 takes advantage of modern plagiarism
          checkers (like <a href="https://www.quetext.com/">Quetext</a> and <a href="https://www.grammarly.com/">
          Grammarly</a>) to check articles. If we find evidence
          that the article produced contains <strong>excerpts copied</strong> from existing resources without proper credits, we will
          inform the author and <strong>terminate the process</strong>.
        </p>
        <p>
          This, of course, does not mean that authors cannot base their work on existing resources. Quite the contrary.
          It is good to produce articles that are supported by previous work and an author can even
          quote an external (or internal for that matter) reference. Authors just have to <strong>ensure</strong> that they are not
          abusing on this practice and <strong>that the due credits are given</strong>.
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
