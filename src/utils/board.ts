import { BoardConfig, Cell, Point } from '../domain';

const relativePositions: ReadonlyArray<Cell> = [
  { row: 1, col: -1 },
  { row: 1, col: 0 },
  { row: 1, col: 1 },
  { row: 0, col: -1 },
  { row: 0, col: 1 },
  { row: -1, col: -1 },
  { row: -1, col: 0 },
  { row: -1, col: 1 },
] as const;

export const countCells = (board: BoardConfig): number =>
  board.rows * board.cols;

export const getSurroundingCells = (cell: Cell, board: BoardConfig): Cell[] => {
  const adjacentTiles: Cell[] = [];

  relativePositions.forEach((relPos: Cell): void => {
    let relRow: number = cell.row + relPos.row;
    let relCol: number = cell.col + relPos.col;

    if (
      relRow >= 0 &&
      relRow < board.rows &&
      relCol >= 0 &&
      relCol < board.cols
    ) {
      adjacentTiles.push({ row: relRow, col: relCol });
    }
  });

  return adjacentTiles;
};

export const getXYFromCell = (
  cell: Cell,
  tileWidth: number,
  tileHeight: number,
): Point => ({
  x: cell.col * tileWidth + tileWidth * 0.5,
  y: cell.row * tileHeight + tileHeight * 0.5,
});

export const getCellFromXY = (
  point: Point,
  tileWidth: number,
  tileHeight: number,
): Cell => ({
  row: point.y / tileHeight - 0.5,
  col: point.x / tileWidth - 0.5,
});

export const getCellFromIndex = (index: number, board: BoardConfig): Cell => ({
  row: Math.floor(index / board.cols),
  col: index % board.cols,
});

export const getIndexFromCell = (cell: Cell, board: BoardConfig): number =>
  cell.row * board.cols + cell.col;

export const compareCells = (a: Cell, b: Cell): boolean =>
  a.row === b.row && a.col === b.col;
