import { MachineConfig, assign, createMachine } from 'xstate';
import { Enemy, EnemyState } from '../domain';
import { hit, move } from './actions';
import { CommonEvents } from './events';
import { isDead } from './guards';

type EnemySchema = {
  states: {
    [state in EnemyState]: {};
  };
};

export const createEnemyMachine = (initialContext: Partial<Enemy> = {}) =>
  createMachine({
    context: {
      name: 'enemy',
      race: 'skeleton',
      health: 1,
      maxHealth: 1,
      attack: 1,
      defense: 0,
      speed: 1,
      gold: 0,
      direction: 'left',
      position: {
        row: 0,
        col: 0,
      },
      ...initialContext,
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          HIT: {
            target: 'hit',
          },
          MOVE: {
            target: 'moving',
            actions: assign(move),
          },
        },
      },
      moving: {},
      hit: {
        entry: assign(hit),
        after: {
          200: [
            {
              cond: isDead,
              target: 'dead',
            },
            {
              target: 'idle',
            },
          ],
        },
      },
      dead: {
        type: 'final',
      },
    },
  } as MachineConfig<Enemy, EnemySchema, CommonEvents>);
