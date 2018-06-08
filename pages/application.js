import React from 'react';
import styled from 'styled-components';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';

const Input = styled.input`
  line-height: 25px;
  font-size: 15px;
  width: 100%;
`;

function Authorship(props) {
  const name = props.profile ? props.profile.name : '';
  const email = props.profile ? props.profile.email : '';
  return (
    <React.Fragment>
      <Profile
        authenticated={props.authenticated}
        auth0Client={props.auth0Client}
        profile={props.profile}
      />
      <Presentation
        title="Application"
        action={() => { props.apply(); }}
        actionLabel="Apply"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          To apply to the Guest Author program, you must agree to this terms and conditions. After that, Auth0
          <strong> will send you a copy of these agreements and invite you to a Slack channel</strong>.
        </p>

        <p>Please, make sure that you have access to the email below, as the invitation and the agreements will be sent to it.</p>

        <p>
          <label htmlFor="name">Name:</label>
          <Input id="name" type="text" value={name} disabled={true}/>
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <Input id="email" type="text" value={email} disabled={true}/>
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
