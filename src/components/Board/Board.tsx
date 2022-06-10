import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { BoardConfig } from '../../domain';
import { countCells, getCellFromIndex } from '../../utils/board';
import { getRandomInt } from '../../utils/math';
import { FloorArea, FloorTile, Layer, Layout } from './Board.styles';

const BoardContext = React.createContext<BoardConfig>(undefined!);
BoardContext.displayName = 'board';

const useBoardContext = () => {
  const value = useContext(BoardContext);

  if (value === undefined) {
    throw new Error('Not within BoardContext');
  }

  return value;
};

const Board = ({
  children,
  ...config
}: BoardConfig & PropsWithChildren<unknown>) => (
  <BoardContext.Provider value={config}>
    <Layout {...config}>{children}</Layout>
  </BoardContext.Provider>
);

const Floor = () => {
  const config = useBoardContext();
  const tiles = useMemo(() => Array(countCells(config)).fill(null), [config]);
  return (
    <FloorArea>
      {tiles.map((_, index) => (
        <FloorTile
          variant={getRandomInt(1, 8)}
          position={getCellFromIndex(index, config)}
          key={`tile_${index}`}
        />
      ))}
    </FloorArea>
  );
};

Board.Layer = React.memo(Layer);
Board.Floor = React.memo(Floor);
Board.MemoizedBoard = React.memo(
  Board,
  (prev, next) => prev.rows === next.rows && prev.cols === next.cols,
);

export default Board;
