import { Character } from '../domain';
import { HitEvent, MoveEvent } from './events';

export const hit = <T extends Character>(
  context: T,
  event: HitEvent,
): Partial<Character> => ({
  health: context.health - event.damage,
});

export const move = <T extends Character>(
  context: T,
  event: MoveEvent,
): Partial<Character> => {
  const { position, speed = 1 } = context;

  switch (event.direction) {
    case 'up':
      return {
        position: {
          ...position,
          row: position.row - speed,
        },
      };
    case 'down':
      return {
        position: {
          ...position,
          row: position.row + speed,
        },
      };
    case 'left':
      return {
        direction: 'left',
        position: {
          ...position,
          col: position.col - speed,
        },
      };
    case 'right':
      return {
        direction: 'right',
        position: {
          ...position,
          col: position.col + speed,
        },
      };
    default:
      return {};
  }
};
