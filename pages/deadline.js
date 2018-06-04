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
        title="Deadline"
        action={() => {}}
        actionLabel="I Agree"
      >
        <p>
          A frequently asked question is if there is a deadline for the process. The short answer is: no, the process
          duration depends on how busy or free is the Guest Author during the process.
        </p>
        <p>
          The long answer is: guest authors usually manage to produce <strong>an article within two or three weeks</strong>.
          However, we know that most guest authors have other duties and that they can get stuck with other important
          matters. Therefore, it wouldn't be a problem if you take a little longer. Just don't end up with an article
          unfinished that becomes old news.
        </p>
      </Presentation>
    </AppLayout>
  );
}

export default withProfile(Authorship);
