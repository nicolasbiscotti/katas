function getSequences(position, boardRows, sequenceGetters) {
  const sequences = [];
  sequenceGetters.forEach((getter) => {
    sequences.push(getter(position, boardRows));
  });
  return sequences;
}

function getRigthSequence({ row, col }, boardRows) {
  if (col === 7) {
    return [];
  }
  return boardRows[row].slice(col + 1).split("");
}
function getLeftSequence({ row, col }, boardRows) {
  const sequence = [];
  if (col === 0) {
    return sequence;
  }
  while (col >= 0) {
    sequence.push(boardRows[row][--col]);
  }
  return sequence;
}

function getRigthDowSequence({ row, col }, boardRows) {
  const sequence = [];

  while (col < 7 && row < 7) {
    sequence.push(boardRows[++row][++col]);
  }

  return sequence;
}

function getLeftDownSequence({ row, col }, boardRows) {
  const sequence = [];

  while (col > 0 && row <= 6) {
    sequence.push(boardRows[++row][--col]);
  }
  return sequence;
}

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

module.exports = getSequences;
