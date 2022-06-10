import styled from 'styled-components';
import { TILE_HEIGHT, TILE_WIDTH } from '../../constants';
import { BoardConfig, PositionProps } from '../../domain';
import { position, size } from '../../utils/styles';

export const FloorArea = styled.div`
  position: relative;
`;

export const Layer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Tile = styled.div<{ variant?: number } & PositionProps>`
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-position: 0 0;
  ${position(TILE_WIDTH, TILE_HEIGHT)}
  ${size(TILE_WIDTH, TILE_HEIGHT)}
`;

export const FloorTile = styled(Tile)`
  background-image: url(/images/board/floor.png);
  background-position-x: -${({ variant = 1 }) => TILE_WIDTH * (variant - 1)}px;
`;

export const WallTile = styled(Tile)<{
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
}>`
  background-image: url(/images/board/walls.png);
  background-position: ${(props) => {
      switch (props.position) {
        case 'left':
          return -TILE_WIDTH * 2;
        case 'right':
          return 0;
        default:
          return -TILE_WIDTH;
      }
    }}px
    0;
`;

export const Layout = styled.div<BoardConfig>`
  width: ${(props) => props.cols * TILE_WIDTH}px;
  height: ${(props) => props.rows * TILE_HEIGHT}px;
  border: 8px solid #303030;
  border-radius: 1px;
  position: relative;
  display: block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;
