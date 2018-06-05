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
        title="Payment"
        action={() => {}}
        actionLabel="I Agree"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          At the Auth0 Guest Author Program, we pay <strong>200 US dollars</strong> per article. That is, if you manage to write a small
          series about "Developing Modern Apps with Django and Vue.js" containing three articles, you will get <strong>600 US
          dollars</strong>. If you manage to address your topic in a single article, then you get 200 dollars.
        </p>
        <p>
          Note, however, that <strong>we will only pay after you finish your whole work</strong>. This is important so
          we avoid situations where the author delivers the first part of a series but, for whatever reason, is unable
          to finish the whole series.
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
