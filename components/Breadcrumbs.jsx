import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
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
  
  > li {
    display: inline;
    margin-left: 5px;
  }
  
  > li > a {
    color: #ccc;
  }
  
  > li > a.active {
    color: #777;
  }
`;

function Breadcrumbs() {
  return (
    <BreadcrumbsArea>
      <BreadcrumbsList>
        <li>
          <Link href="/">
            <a>Introduction</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/authorship">
            <a>Authorship</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/copyright">
            <a>Copyright</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/plagiarism">
            <a>Plagiarism</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/agreement">
            <a>Agreement</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/payment">
            <a>Payment</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/deadline">
            <a>Deadline</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/process">
            <a>Process</a></Link>
        </li>
        <li>></li>
        <li>
          <Link href="/sample">
            <a>Sample</a></Link>
        </li>
      </BreadcrumbsList>
    </BreadcrumbsArea>
  );
}

export default Breadcrumbs;
