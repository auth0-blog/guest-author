import React from 'react';
import PropTypes from 'prop-types';
import {DefaultButton, PrimaryButton} from './Buttons';
import Card from './Card';
import ContentArea from './ContentArea';

const PresentationCard = Card.extend`
  > div.actions {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

function Presentation(props) {
  return (
    <ContentArea>
      <PresentationCard>
        <h2>{props.title}</h2>
        {props.children}
        <div className="actions">
          <div>
            {props.cancel !== undefined && <DefaultButton onClick={props.cancel}>{props.cancelLabel}</DefaultButton>}
          </div>
          <PrimaryButton
            onClick={props.action}
          >
            {props.actionLabel}
          </PrimaryButton>
        </div>
      </PresentationCard>
    </ContentArea>
  );
}

Presentation.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
  cancel: PropTypes.func,
  cancelLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Presentation;
