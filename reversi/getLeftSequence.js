function getLeftSequence({ boardRows, boardSize }, positionOutOfBounds) {
  return function ({ row, col }) {
    const sequence = [];
    if (col === 0 || positionOutOfBounds({ row, col }, boardSize)) {
      return sequence;
    }
    while (col >= 0) {
      sequence.push(boardRows[row][--col]);
    }
    return sequence;
  };
}

function positionOutOfBounds({ row, col }, boardSize) {
  const upperLimit = boardSize - 1;

  const colOutOfBounds = col < 0 || col > upperLimit;
  const rowOutOfBounds = row < 0 || row > upperLimit;

  if (colOutOfBounds || rowOutOfBounds) {
    return true;
  }
  return false;
}
module.exports = { getLeftSequence, positionOutOfBounds };
