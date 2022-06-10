import { css } from 'styled-components';
import { DirectionProps, PositionProps } from '../domain';

export const position =
  (scaleWidth = 1, scaleHeight = 1) =>
  ({ position = { row: 0, col: 0 } }: Partial<PositionProps>) =>
    css`
      position: absolute;
      top: ${position.row * scaleHeight}px;
      left: ${position.col * scaleWidth}px;
    `;

export const size =
  (scaleWidth = 1, scaleHeight = 1) =>
  () =>
    css`
      width: ${scaleWidth}px;
      height: ${scaleHeight}px;
    `;

export const direction = ({ direction = 'right' }: Partial<DirectionProps>) =>
  css`
    transform: ${direction === 'left' ? 'scaleX(-1)' : 'initial'};
  `;
