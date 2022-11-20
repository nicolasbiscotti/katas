function getRigthDowSequence({ row, col }, boardRows) {
  const sequence = [];

  while (col < 7 && row < 7) {
    sequence.push(boardRows[++row][++col]);
  }

  return sequence;
}
module.exports = getRigthDowSequence;
