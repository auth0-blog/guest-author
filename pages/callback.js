import PropTypes from 'prop-types';
import React from 'react';
import ContentArea from '../components/ContentArea';
import withProfile from '../components/withProfile';

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

export default withProfile(Callback);
