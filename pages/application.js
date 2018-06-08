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
          Now that you know how the process work, please, confirm your name and email address (we will send you a copy of the
          agreement made here).
        </p>

        <p>
          <label htmlFor="name">Name:</label>
          <Input id="name" type="text"/>
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <Input id="email" type="text"/>
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
