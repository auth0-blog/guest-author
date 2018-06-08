import React from 'react';
import styled from 'styled-components';
import ActiveLink from './ActiveLink'
import ContentArea from './ContentArea';

const BreadcrumbsArea = ContentArea.extend`
  margin-bottom: -15px;
`;

const BreadcrumbsList = styled.ul`
  list-style: none;
  font-size: 13px;
  padding-left: 0;
  text-align: center;
  max-width: 770px;
  overflow-x: auto;
  margin: 15px 0 15px 0;
  
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
            Introduction
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/authorship">
            Authorship
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/copyright">
            Copyright
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/plagiarism">
            Plagiarism
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/agreement">
            Agreement
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/payment">
            Payment
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/deadline">
            Deadline
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/process">
            Process
          </ActiveLink>
        </li>
        <li>></li>
        <li>
          <ActiveLink href="/sample">
            Sample
          </ActiveLink>
        </li>
      </BreadcrumbsList>
    </BreadcrumbsArea>
  );
}

export default Breadcrumbs;
