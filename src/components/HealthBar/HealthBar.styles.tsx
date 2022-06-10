import styled from 'styled-components';
import { size } from '../../utils/styles';
import { Entity } from '../Entity';

export const List = styled.ul`
  display: inline-flex;
  gap: 1px;
`;

const offsets = {
  empty: -50,
  half: -34,
  full: -18,
} as const;

export const Heart = styled(Entity)<{ state: keyof typeof offsets }>`
  ${size(18, 18)}
  &::before {
    background-position-y: -132px;
    background-position-x: ${({ state }) => offsets[state]}px;
    background-image: url(/images/dungeonui.v1.png);
  }
`;
