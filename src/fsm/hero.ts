import { MachineConfig, assign, createMachine } from 'xstate';
import { HeroState, Player } from '../domain';
import { hit, move } from './actions';
import { CharacterEvents } from './events';
import { isDead } from './guards';

type Context = Player;

interface Schema {
  states: {
    [name in HeroState]: {};
  };
}

export const createHeroMachine = (initialOptions: Partial<Player>) =>
  createMachine({
    id: 'hero',
    context: {
      name: 'Hero',
      race: 'elf',
      health: 3,
      maxHealth: 3,
      attack: 1,
      defense: 0.25,
      speed: 1,
      gold: 0,
      hasKey: false,
      direction: 'right',
      position: {
        row: 0,
        col: 0,
      },
      ...initialOptions,
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
      moving: {
        on: {
          HIT: {
            target: 'hit',
          },
          ACTION_END: [
            {
              target: 'idle',
            },
          ],
        },
      },
      attacking: {
        on: {
          ACTION_END: {
            target: 'idle',
          },
        },
      },
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
  } as MachineConfig<Context, Schema, CharacterEvents>);
