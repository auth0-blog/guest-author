import styled from 'styled-components';

export const DefaultButton = styled.button`
  display: inline-block;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 7px 10px;
  font-size: 11px;
  line-height: 2;
  border-radius: 3px;
  user-select: none;
  transition: background-color .2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-width: 0;
  color: #333;
  background: #f1f1f1;
  border-color: #ccc;
`;

export const SuccessButton = DefaultButton.extend`
  color: #fff;
  background-color: #eb5424;
  border-color: #e14615;
`;

export const PrimaryButton = DefaultButton.extend`
  color: #fff;
  background-color: #44c7f4;
  border-color: #2cc0f3;
`;
