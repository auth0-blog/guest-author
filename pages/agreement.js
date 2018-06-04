import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import Presentation from '../components/Presentation';

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
    <AppLayout>
      <AgreementContainer>
        <Presentation
          action={() => {}}
          actionLabel="I Agree"
          auth0Client={{}}
          cancel={() => {}}
          cancelLabel="Step Back"
          title="Agreement"
        >
          <h3>Copyright</h3>
          <p>Regarding the copyright, do you agree <strong>not to publish the article elsewhere</strong> without Auth0's consent?</p>
          <label onClick={() => {}}>
            <span className={props.agreeCopyright ? 'checked' : ''}>
              <span>✔</span>
            </span>
            Yes, I agree <strong>not to publish the article elsewhere</strong> without Auth0's consent.
          </label>
          <h3>Plagiarism</h3>
          <p>Regarding plagiarism, do you agree <strong>not to copy content</strong> from other resources without giving the due credits?</p>
          <label onClick={() => {}}>
            <span className={props.agreePlagiarism ? 'checked' : ''}>
              <span>✔</span>
            </span>
            Yes, I agree <strong>not to copy content</strong> from other resources.
          </label>
        </Presentation>
      </AgreementContainer>
    </AppLayout>
  );
}

export default Authorship;