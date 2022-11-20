function* createPositions(input, createBoard) {
  const board = createBoard(input);
  const boardSize = board.boardSize();
  const numberOfSquares = boardSize * boardSize;

  let square = 0;
  while (square < numberOfSquares) {
    const coordinates = getRowAndCol(square++, boardSize);
    yield {
      coordinates,
      isEmpty: board.isAnEmptySquare(coordinates),
      boardRows: board.boardRows(),
      playersTurn: board.playersTurn(),
    };
  }
  return null;
}

function getRowAndCol(square, boardSize) {
  return { row: Math.floor(square / boardSize), col: square % boardSize };
}

module.exports = createPositions;
