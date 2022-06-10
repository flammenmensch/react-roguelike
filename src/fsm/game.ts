import {
  ActorRefFrom,
  MachineConfig,
  assign,
  createMachine,
  spawn,
} from 'xstate';
import { BoardConfig, Player } from '../domain';
import { createPlayMachine } from './play';

interface Context {
  playRef: null | ActorRefFrom<ReturnType<typeof createPlayMachine>>;
  board: null | BoardConfig;
}

interface Schema {
  states: {
    init: {};
    menu: {};
    settings: {};
    play: {};
    gameOver: {};
  };
}

type Events =
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
    };

export const createGameMachine = () => {
  const config: MachineConfig<Context, Schema, Events> = {
    id: 'game',
    context: {
      playRef: null,
      board: null,
    },
    initial: 'init',
    states: {
      init: {
        after: {
          2000: {
            target: 'menu',
          },
        },
      },
      menu: {
        on: {
          START: {
            target: 'settings',
          },
        },
      },
      settings: {
        on: {
          PLAY: {
            target: 'play',
          },
          QUIT: {
            target: 'menu',
          },
        },
      },
      play: {
        entry: assign({
          board: (_, { settings }: Extract<Events, { type: 'PLAY' }>) => ({
            rows: settings.board.rows,
            cols: settings.board.cols,
            size: 16,
          }),
          playRef: (_, { settings }: Extract<Events, { type: 'PLAY' }>) =>
            spawn(
              createPlayMachine({
                player: settings.player,
                enemies: [
                  {
                    position: {
                      row: settings.board.rows - 1,
                      col: 0,
                    },
                  },
                  {
                    position: {
                      row: settings.board.rows - 1,
                      col: settings.board.cols - 1,
                    },
                  },
                ],
              }),
            ),
        }),
        on: {
          QUIT: {
            target: 'menu',
          },
        },
      },
      gameOver: {
        on: {
          RESTART: {
            target: 'play',
          },
          QUIT: {
            target: 'menu',
          },
        },
      },
    },
  };

  return createMachine(config);
};
