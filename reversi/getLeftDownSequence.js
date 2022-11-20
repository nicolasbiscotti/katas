function getLeftDownSequence({ row, col }, boardRows) {
  const sequence = [];

  while (col > 0 && row <= 6) {
    sequence.push(boardRows[++row][--col]);
  }
  return sequence;
}
module.exports = getLeftDownSequence;
