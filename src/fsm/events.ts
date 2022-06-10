import { MoveDirection, Player } from '../domain';

export type MoveEvent = { type: 'MOVE'; direction: MoveDirection };

export type HitEvent = { type: 'HIT'; damage: number };

export type ActionEndEvent = { type: 'ACTION_END' };

export type AttackEvent = { type: 'ATTACK'; damage: number };

/**
 * @deprecated
 */
export type CommonEvents = MoveEvent | HitEvent | AttackEvent | ActionEndEvent;

export type CharacterEvents =
  | MoveEvent
  | HitEvent
  | AttackEvent
  | ActionEndEvent;
type MoveHeroEvent = {
  type: 'HERO.MOVE';
  direction: MoveDirection;
};

export type GameEvents =
  | {
      type: 'START';
    }
  | {
      type: 'QUIT';
    }
  | {
      type: 'RESTART';
    }
  | {
      type: 'PLAY';
      settings: {
        player: Partial<Player>;
        board: {
          rows: number;
          cols: number;
        };
      };
    }
  | MoveHeroEvent;
