import React from 'react';
import styled from 'styled-components';
import ActiveLink from './ActiveLink'
import ContentArea from './ContentArea';

const BreadcrumbsArea = ContentArea.extend`
  margin-bottom: -15px;
`;

const BreadcrumbsList = styled.ul`
  margin-left: 0;
  list-style: none;
  font-size: 12px;
  padding-left: 0;
  text-align: center;
  max-width: 770px;
  overflow-x: scroll;
  
  > li {
    display: inline;
    margin-left: 5px;
  }
`;

function Breadcrumbs() {
  return (
    <BreadcrumbsArea>
      <BreadcrumbsList>
        <li>
          <ActiveLink href="/">
            <a>Introduction</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/authorship">
            <a>Authorship</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/copyright">
            <a>Copyright</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/plagiarism">
            <a>Plagiarism</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/agreement">
            <a>Agreement</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/payment">
            <a>Payment</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/deadline">
            <a>Deadline</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/process">
            <a>Process</a>
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/sample">
            <a>Sample</a>
          </ActiveLink>
        </li>
      </BreadcrumbsList>
    </BreadcrumbsArea>
  );
}

export default Breadcrumbs;
