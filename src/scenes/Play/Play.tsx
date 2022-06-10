import { useActor, useSelector } from '@xstate/react';
import Board from '../../components/Board';
import Button from '../../components/Button';
import HealthBar from '../../components/HealthBar';
import EnemyContainer from '../../containers/EnemyContainer';
import HeroContainer from '../../containers/HeroContainer';
import { useGame } from '../../context/GameProvider';
import useControls from '../../hooks/useControls';

interface Props {
  onQuit: () => void;
}

const Play = ({ onQuit }: Props) => {
  const { gameService } = useGame();

  const [, send] = useActor(gameService);

  const playRef = useSelector(gameService, (state) => state.context.playRef);

  const board = useSelector(gameService, (state) => state.context.board);

  useControls((key) => {
    switch (key) {
      case 'up':
      case 'left':
      case 'down':
      case 'right':
      // TODO: send to playRef
      default:
    }
  });

  if (!playRef || !board) {
    return null;
  }

  return (
    <>
      <HealthBar />
      <Board.MemoizedBoard {...board}>
        <Board.Layer key="floor">
          <Board.Floor />
        </Board.Layer>
        {/*<Board.Layer key="props" />
          <Board.Layer key="items" />*/}
        <Board.Layer key="enemies">
          {playRef.state.context.enemies.map((actor, index) => (
            <EnemyContainer key={`${actor.id}_${index}`} actor={actor} />
          ))}
        </Board.Layer>
        <Board.Layer key="hero">
          <HeroContainer actor={playRef.state.context.player} />
        </Board.Layer>
      </Board.MemoizedBoard>
      <Button label="Quit" onClick={onQuit} />
    </>
  );
};

export default Play;
