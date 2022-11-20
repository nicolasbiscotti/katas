function whoseTurn(board) {
  const boardRows = board.split("\n");
  return boardRows[boardRows.length - 1][0];
}
module.exports = whoseTurn;
