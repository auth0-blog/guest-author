import React from 'react';
import ContentArea from '../components/ContentArea';
import withOnboardService from '../components/withOnboardService';

const CallbackArea = ContentArea.extend`
  margin-top: 30px;
  text-align: center;
  font-size: 26px;
`;

function Callback(props) {
  props.auth0Client.parseHash();
  return (
    <CallbackArea>
      <p>Loading Profile...</p>
    </CallbackArea>
  );
}

export default withOnboardService(Callback);
