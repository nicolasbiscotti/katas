function getDownSequence({ row, col }, boardRows) {
  const sequence = [];
  if (row < 0 || col > 7 || col < 0) {
    return sequence;
  }

  while (row < 7) {
    sequence.push(boardRows[++row][col]);
  }
  return sequence;
}
module.exports = getDownSequence;
