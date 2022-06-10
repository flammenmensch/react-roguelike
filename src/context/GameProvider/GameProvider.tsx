import React, { useContext, useMemo } from 'react';
import { useInterpret } from '@xstate/react';
import { InterpreterFrom } from 'xstate';
import { createGameMachine } from '../../fsm/game';

interface Value {
  gameService: InterpreterFrom<ReturnType<typeof createGameMachine>>;
}

const GameContext = React.createContext<Value>(undefined!);
GameContext.displayName = 'Game';

export const useGame = () => {
  const value = useContext(GameContext);

  if (!value) {
    throw new Error('Component is not within game context');
  }

  return value;
};

const gameMachine = createGameMachine();

const GameProvider = (props: React.PropsWithChildren<unknown>) => {
  const gameService = useInterpret(gameMachine);
  const value = useMemo(() => ({ gameService }), [gameService]);

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};

export default GameProvider;
