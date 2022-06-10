import styled from 'styled-components';
import React from 'react';
import { TILE_HEIGHT, TILE_WIDTH } from '../../constants';
import { DirectionProps } from '../../domain';
import { direction, position } from '../../utils/styles';
import { Entity } from '../Entity';

type Props = Partial<DirectionProps> & React.ComponentProps<typeof Entity>;

const Character = styled(Entity)<Props>`
  ${direction}
  ${position(TILE_WIDTH, TILE_HEIGHT)}
  &::before {
    position: absolute;
    filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.35))
      drop-shadow(0 2px 3px rgb(0 0 0 / 0.25));
  }
`;

export default Character;
