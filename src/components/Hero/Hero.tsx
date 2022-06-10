import styled, { css, keyframes } from 'styled-components';
import { ComponentProps } from 'react';
import { HERO_SPRITE_HEIGHT, HERO_SPRITE_WIDTH } from '../../constants';
import { Gender, HeroRace, HeroState } from '../../domain';
import { size } from '../../utils/styles';
import Character from '../Character/Character';

interface Props extends ComponentProps<typeof Character> {
  state?: HeroState;
  race?: HeroRace;
  gender?: Gender;
}

const idleAnimation = keyframes`
  0% {
    background-position-x: -${HERO_SPRITE_WIDTH}px;
  }
  100% {
    background-position-x: -${HERO_SPRITE_WIDTH * 5}px;
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
    background-position-x: -${HERO_SPRITE_WIDTH * 5}px;
  }
  100% {
    background-position-x: -${HERO_SPRITE_WIDTH * 9}px;
  }
`;

const race = ({ race = 'elf', gender = 'male' }: Props) => css`
  background-image: url('/images/heroes/${race}_${gender === 'male'
    ? 'm'
    : 'f'}.png');
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

const Hero = styled(Character)<Props>`
  &::before {
    ${race}
    ${state}
    ${size(HERO_SPRITE_WIDTH, HERO_SPRITE_HEIGHT)}
  }
`;

export default Hero;
