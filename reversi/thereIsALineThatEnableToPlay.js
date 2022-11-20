function thereIsALineThatEnableToPlay(board, adjacentLineFinders, isLegalMove) {
  for (const lineFinder of adjacentLineFinders) {
    const line = lineFinder(board.boardRows, board.currentSquare);
    if (isLegalMove(board.playersTurn, line)) {
      return true;
    }
  }
  return false;
}
module.exports = thereIsALineThatEnableToPlay;
