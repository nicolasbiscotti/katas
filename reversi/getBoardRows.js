function getBoardRows(input) {
  const boardRows = input.split("\n");
  boardRows.pop();
  return boardRows;
}

module.exports = getBoardRows;
