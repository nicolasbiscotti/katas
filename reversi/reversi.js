function createReversi(squares, trackSquare, createOutput) {
  return (input) => {
    for (const square of squares) {
      trackSquare(square);
    }
    return createOutput(input);
  };
}

module.exports = createReversi;
