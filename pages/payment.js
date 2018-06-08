import React from 'react';
import styled from 'styled-components';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';

const ArticleCategory = styled.h3`
  font-size: 17px;
  margin-top: 25px;
  margin-bottom: -10px;
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
        title="Payment"
        action={props.moveForward}
        actionLabel="Next"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>Articles submitted to the Guest Author program are categorized and payed through the following rules:</p>
        <ArticleCategory>Theoretical Articles</ArticleCategory>
        <p>Auth0 pays the following amounts to articles that explain concepts from a theoretical point of view:</p>
        <ul>
          <li>Up to 1000 words: 75 USD</li>
          <li>Up to 1250 words: 100 USD</li>
          <li>Up to 1500 words: 125 USD</li>
          <li>More than 1500 words: 150 USD</li>
        </ul>
        <p>
          Plus 50 USD if authors explain, with at least 200 words, how Auth0 can help on the context being studied.
        </p>
        <ArticleCategory>Technical Articles</ArticleCategory>
        <p>For technical articles (those that include hands-on exercises), Auth0 pays the following amounts:</p>
        <ul>
          <li>Up to 1000 words: 125 USD</li>
          <li>Up to 1500 words: 175 USD</li>
          <li>More than 1500 words: 225 USD</li>
        </ul>
        <p>
          Plus 75 USD if authors explain how to integrate Auth0 on their samples.
        </p>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
