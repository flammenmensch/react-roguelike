import styled from 'styled-components';
import { TILE_HEIGHT, TILE_WIDTH } from '../../constants';
import { PositionProps, SizeProps } from '../../domain';
import { position, size } from '../../utils/styles';

type Props = Partial<PositionProps & SizeProps>;

const Entity = styled.div<Props>`
  ${size(TILE_WIDTH, TILE_HEIGHT)}
  display: block;
  background-repeat: no-repeat;
  will-change: transition;
  transition: top 0.25s linear, left 0.25s linear, transform 0.05s linear;

  pointer-events: none;
  contain: size layout;

  &::before {
    content: '';
    display: block;
    left: 0;
    bottom: 0;
    width: inherit;
    height: inherit;
    animation-iteration-count: infinite;
    animation-delay: 0s;
    animation-duration: 0.5s;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(/images/tileset.png);
  }
`;

export default Entity;
