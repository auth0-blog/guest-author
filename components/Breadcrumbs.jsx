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
        <li><Link href="/introduction">Introduction</Link></li>
        <li>></li>
        <li><Link href="/authorship">Authorship</Link></li>
        <li>></li>
        <li><Link href="/copyright">Copyright</Link></li>
        <li>></li>
        <li><Link href="/plagiarism">Plagiarism</Link></li>
        <li>></li>
        <li><Link href="/agreement">Agreement</Link></li>
        <li>></li>
        <li><Link href="/payment">Payment</Link></li>
        <li>></li>
        <li><Link href="/deadline">Deadline</Link></li>
        <li>></li>
        <li><Link href="/process">Process</Link></li>
        <li>></li>
        <li><Link href="/sample">Sample</Link></li>
      </BreadcrumbsList>
    </BreadcrumbsArea>
  );
}

export default Breadcrumbs;
