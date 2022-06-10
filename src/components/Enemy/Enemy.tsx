import styled, { css, keyframes } from 'styled-components';
import { ComponentProps } from 'react';
import {
  ENEMY_SPRITE_HEIGHT,
  ENEMY_SPRITE_WIDTH,
  HERO_SPRITE_WIDTH,
} from '../../constants';
import { EnemyRace, EnemyState } from '../../domain';
import { size } from '../../utils/styles';
import Character from '../Character/Character';

interface Props extends ComponentProps<typeof Character> {
  race?: EnemyRace;
  state?: EnemyState;
}

const idleAnimation = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -${HERO_SPRITE_WIDTH * 4}px;
  }
`;

const hitAnimation = keyframes`
  0% {
    background-position-x: 0;
    filter: brightness(2);
  }
  50% {
    filter: brightness(1);
  }
  100% {
    background-position-x: 0;
    filter: brightness(2);
  }
`;

const moveAnimation = keyframes`
  0% {
    background-position-x: -${HERO_SPRITE_WIDTH * 4}px;
  }
  100% {
    background-position-x: -${HERO_SPRITE_WIDTH * 8}px;
  }
`;

const state = ({ state = 'idle' }: Props) => {
  switch (state) {
    case 'moving':
      return css`
        animation: ${moveAnimation} 0.35s steps(4) infinite;
      `;
    case 'hit':
      return css`
        animation: ${hitAnimation} 0.25s steps(1) infinite;
      `;
    default:
      return css`
        animation: ${idleAnimation} 0.5s steps(4) infinite;
      `;
  }
};

const race = ({ race = 'skeleton' }: Props) => css`
  background-image: url('/images/enemies/${race}.png');
`;

const Enemy = styled(Character)<Props>`
  &::before {
    ${race}
    ${state}
    ${size(ENEMY_SPRITE_WIDTH, ENEMY_SPRITE_HEIGHT)}
  }
`;

export default Enemy;
