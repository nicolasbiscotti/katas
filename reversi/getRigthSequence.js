function getRigthSequence({ row, col }, boardRows) {
  if (col === 7) {
    return [];
  }
  return boardRows[row].slice(col + 1).split("");
}
module.exports = getRigthSequence;
