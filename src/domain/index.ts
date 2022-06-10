export interface Cell {
  row: number;
  col: number;
}

export interface SizeProps {
  width: number;
  height: number;
}

export interface PositionProps {
  position: Cell;
}

export interface DirectionProps {
  direction: FaceDirection;
}

/**
 * @deprecated
 */
export type Point = { x: number; y: number };

export interface BoardConfig {
  rows: number;
  cols: number;
  cells?: Array<Cell>;
}

export interface Entity extends PositionProps {
  name: string;
}

export interface Prop extends Entity {}

export interface Item extends Prop {
  type: ItemType;
  attack: number;
  defense: number;
  health: number;
  gold: number;
}

export interface Character extends Entity, DirectionProps {
  health: number;
  maxHealth: number;
  gold: number;
  attack: number;
  defense: number;
  speed: number;
}

export type HeroState = 'attacking' | 'moving' | 'idle' | 'hit' | 'dead';

export type HeroRace = 'elf' | 'knight' | 'wizard' | 'lizard';

export type EnemyRace = 'skeleton' | 'orc' | 'zombie';

export type EnemyState = 'idle' | 'moving' | 'hit' | 'dead';

export type BossRace = 'demon' | 'zombie';

export type Gender = 'male' | 'female';

export type ItemType = 'flask' | 'sword' | 'shield' | 'key';

/**
 * @deprecated
 */
export type Direction = 'left' | 'right';

export type FaceDirection = Direction;

export type MoveDirection = 'up' | 'down' | 'left' | 'right';

export interface Player extends Character {
  race: HeroRace;
  hasKey: boolean;
}

export interface Enemy extends Character {
  race: EnemyRace;
}

export interface Boss extends Character {
  race: BossRace;
}

export interface Game {
  level: number;
  player: Player;
}

type Coefficient = {
  occupation: number;
  variation: number;
};

export interface Level {
  coefficients: {
    props: Coefficient;
    items: Coefficient;
    enemies: Coefficient;
  };
  props: Array<Prop>;
  enemies: Array<Enemy>;
  items: Array<Item>;
}
