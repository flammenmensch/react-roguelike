import React, { useCallback } from 'react';
import { useActor } from '@xstate/react';
import { useGame } from './context/GameProvider';
import { HeroRace } from './domain';
import { Init, Menu, Play, Settings } from './scenes';

function App() {
  const { gameService } = useGame();
  const [state, send] = useActor(gameService);

  const handlePlay = useCallback(() => {
    send('START');
  }, [send]);

  const handleQuit = useCallback(() => {
    send('QUIT');
  }, [send]);

  const handleHeroSelect = useCallback(
    (race: HeroRace) => {
      send({
        type: 'PLAY',
        settings: {
          player: {
            name: 'Player',
            race,
          },
          board: {
            rows: 12,
            cols: 12,
          },
        },
      });
    },
    [send],
  );

  return (
    <>
      {state.matches('init') && <Init />}
      {state.matches('menu') && <Menu onPlay={handlePlay} />}
      {state.matches('settings') && (
        <Settings onHeroSelect={handleHeroSelect} onQuit={handleQuit} />
      )}
      {state.matches('play') && <Play onQuit={handleQuit} />}
    </>
  );
}

export default App;
