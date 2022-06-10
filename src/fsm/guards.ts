import { BoardConfig, Character, MoveDirection } from '../domain';

export const isDead = (context: Character) => context.health <= 0;

export const isMoveAction = (context: Character) => false;

export const canMove = (
  context: Character,
  direction: MoveDirection,
  board: BoardConfig,
) => {
  const { position } = context;

  // TODO Check for enemies and obstacles

  return !(
    (position.col === 0 && direction === 'left') ||
    (position.row === 0 && direction === 'up') ||
    (position.col === board.cols - 1 && direction === 'right') ||
    (position.row === board.rows - 1 && direction === 'down')
  );
};
