import React from 'react';
import AppLayout from '../components/AppLayout';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withProfile from '../components/withProfile';

function Authorship(props) {
  return (
    <AppLayout>
      <Profile
        authenticated={props.authenticated}
        auth0Client={props.auth0Client}
        profile={props.profile}
      />
      <Presentation
        restricted
        title="Authorship"
        action={() => {}}
        actionLabel="I Agree"
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
    </AppLayout>
  );
}

export default withProfile(Authorship);
