import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
    
  > img {
    max-width: 80px;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <img src="/guest-authors/onboard/static/logo-grey.png" alt="Auth0 Logo"/>
    </LogoContainer>
  );
}

export default Logo;
