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
        title="Sample"
        action={() => {}}
        actionLabel="I Agree"
      >
        <p>
          This is the last step in the application process. You will have to answer just a few questions and write a small
          sample so we can evaluate you.
        </p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </Presentation>
    </AppLayout>
  );
}

export default withProfile(Authorship);
