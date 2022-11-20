function isLegalMove(turnOfPlayer, sequence) {
  if (areInvalidInputs(turnOfPlayer, sequence)) {
    return false;
  }

  let legalMove = false;

  if (startWithOponentCounter(sequence, turnOfPlayer)) {
    let keepSearching = true;
    let nextSquare = 1;

    while (keepSearching && nextSquare < sequence.length) {
      if (sequence[nextSquare] === ".") {
        keepSearching = false;
      } else if (sequence[nextSquare] === turnOfPlayer) {
        legalMove = true;
        keepSearching = false;
      }
      nextSquare++;
    }
  }

  return legalMove;
}

function startWithOponentCounter(sequence, turnOfPlayer) {
  return sequence[0] !== "." && sequence[0] !== turnOfPlayer;
}

function areInvalidInputs(turnOfPlayer, sequence) {
  if (turnOfPlayer !== "B" && turnOfPlayer !== "W") {
    return true;
    // throw new Error(
    //   `Player ${turnOfPlayer} is invalid, players B and W are playing`
    // );
  } else if (!Array.isArray(sequence) || sequence.length < 2) {
    return true;
    // throw new Error(
    //   "Invalid sequence, it should be an array of length greater than one"
    // );
  }
}

module.exports = isLegalMove;
