import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  > img {
    max-width: 80px;
    margin-top: 15px;
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
