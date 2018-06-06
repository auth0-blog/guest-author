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
        title="Editorial Process"
        action={props.moveForward}
        actionLabel="Next"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          As most articles submitted to the Auth0 Guest Author Program are related to programming languages, frameworks, etc,
          the following process usually takes place:
        </p>
        <ol>
          <li>The Guest Author (GA) and Auth0 <strong>define a topic</strong> together.</li>
          <li>The <strong>GA develops a prototype</strong> with the chosen technologies and upload it to a GitHub repo with basic instructions on how to run.</li>
          <li>Auth0 analyses the prototype, the code, and the whole implementation and approach to provide feedback.</li>
          <li>The GA applies (if needed) any fix/enhancement asked by Auth0.</li>
          <li>The <strong>GA shares an outline of the article</strong> (just the main structure with headers and sub-headers, no real content).</li>
          <li>Auth0 analyses and make comments on the outline.</li>
          <li>The GA applies (if needed) corrections to the outline.</li>
          <li>The <strong>GA writes the post</strong>.</li>
          <li>Auth0 reviews the post and, if needed, make corrections, amendments, etc.</li>
          <li><strong>Auth0 pays for the article</strong> (in the case of a series, we might wait for the last piece to process the payment).</li>
        </ol>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
