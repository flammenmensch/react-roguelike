import styled from 'styled-components';

export const List = styled.ul`
  display: inline-flex;
  gap: 4px;
`;

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  padding: 8px;
  background: #efefef;
  cursor: pointer;
  transition: all 0.2s linear;
  will-change: transform;
  border-radius: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07);
  }

  &:active {
    transform: translateY(-1px);
  }

  & > * {
    position: relative;
  }
`;
