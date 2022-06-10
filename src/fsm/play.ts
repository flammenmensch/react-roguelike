import { ActorRefFrom, MachineConfig, createMachine, spawn } from 'xstate';
import { Enemy, Player } from '../domain';
import { createEnemyMachine } from './enemy';
import { createHeroMachine } from './hero';

interface Options {
  player: Partial<Player>;
  enemies: Partial<Enemy>[];
}

interface Context {
  player: ActorRefFrom<ReturnType<typeof createHeroMachine>>;
  enemies: ActorRefFrom<ReturnType<typeof createEnemyMachine>>[];
}

interface Schema {
  states: {
    idle: {};
    busy: {};
  };
}

type Event = { type: 'PLAYER.ACTION' };

export const createPlayMachine = (options: Options) =>
  createMachine({
    id: 'play',
    context: {
      player: spawn(createHeroMachine(options.player)),
      enemies: options.enemies.map((enemy, index) =>
        spawn(createEnemyMachine(enemy), `enemy_${index}`),
      ),
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          'PLAYER.ACTION': {},
        },
      },
      busy: {},
    },
  } as MachineConfig<Context, Schema, Event>);
