import React from 'react';
import styled from 'styled-components';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';

const AgreementContainer = styled.section`
  label {
    line-height: 30px;
    display: block;
    margin-bottom: 15px;
    
    :hover {
      cursor: pointer;
      
      span {
        background-color: #85cc85;
        color: #fff;
      }
    }
  }
  
  label > span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #eee;
    margin-right: 10px;
    float: left;
    
    span {
      display: none;
    }
  }
  
  label > span.checked {
    > span {
      background-color: #85cc85;
      color: #fff;
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
`;

function Authorship(props) {
  return (
    <React.Fragment>
      <Profile {...props} />
      <AgreementContainer>
        <Presentation
          action={props.moveForward}
          actionLabel="Next"
          cancel={props.stepBack}
          cancelLabel="Go Back"
          title="Agreement"
        >
          <p>Regarding the copyright, do you agree not to publish the article elsewhere without Auth0's consent?</p>
          <label onClick={props.toggleCopyright}>
            <span className={props.agreeCopyright ? 'checked' : ''}>
              <span>✔</span>
            </span>
            Yes, <strong>I agree not to publish the article elsewhere</strong>.
          </label>
          <p>Regarding plagiarism, do you agree not to copy content from other resources without giving the due credits?</p>
          <label onClick={props.togglePlagiarism}>
            <span className={props.agreePlagiarism ? 'checked' : ''}>
              <span>✔</span>
            </span>
            Yes, <strong>I agree not to commit plagiarism</strong>.
          </label>
        </Presentation>
      </AgreementContainer>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
