import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  > img {
    max-width: 90px;
    margin-top: 19px;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <img src="./static/logo-grey.png" alt="Auth0 Logo"/>
    </LogoContainer>
  );
}

export default Logo;
