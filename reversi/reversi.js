let boardRows = [];

function createReversi() {
  return function (input) {
    let output = "";

    const [player, lines] = getGameState(input);
    boardRows = lines;

    for (const line of lines) {
      output += getOutputLine(player, line);
    }

    output += player;

    return output;
  };
}

function canAnyCounterBeFlipped(spot, spotValue, player) {
  let theAnswerIs;

  if (spot === 0 && (spotValue === "." || spotValue === player)) {
    theAnswerIs = false;
  } else if (spotValue === ".") {
    theAnswerIs = false;
  } else if (spotValue === player) {
    theAnswerIs = true;
  } else {
    theAnswerIs = null;
  }

  return theAnswerIs;
}

function isFlippingLine(player, adjacentLine) {
  for (let spot = 0; spot < adjacentLine.length; spot++) {
    const answer = canAnyCounterBeFlipped(spot, adjacentLine[spot], player);
    if (answer !== null) {
      return answer;
    }
  }
  return false;
}

function getRigth(line, emptyPosition) {
  const adjacentLine = line.slice(emptyPosition + 1);
  return adjacentLine;
}

function getLeft(line, emptyPosition) {
  const values = line.split("");
  const adjacentLine = [];
  for (let index = emptyPosition - 1; index >= 0; index--) {
    const value = values[index];
    adjacentLine.push(value);
  }
  return adjacentLine.join("");
}

function getDown(line, emptyPosition) {
  function getRowAndCol(position, boardSize) {
    return { row: Math.floor(position / boardSize), col: position % boardSize };
  }
  function getDownSequence({ row, col }, lines) {
    const sequence = [];

    for (let index = row + 1; index < lines.length; index++) {
      sequence.push(lines[++row][col]);
    }

    return sequence;
  }

  const adjacentLine = getDownSequence(
    getRowAndCol(emptyPosition, line.length),
    boardRows
  );

  return adjacentLine.join("");
}

function isLegalMoveFor(player, position, currentLine) {
  const adjacentLineGetters = [getRigth, getLeft, getDown];
  const squareIsEmpty = currentLine[position] === ".";

  if (squareIsEmpty) {
    for (const getAdjacentLine of adjacentLineGetters) {
      if (isFlippingLine(player, getAdjacentLine(currentLine, position))) {
        return true;
      }
    }
  }

  return false;
}

function getOutputLine(player, line) {
  let output = "";
  for (let position = 0; position < line.length; position++) {
    if (isLegalMoveFor(player, position, line)) {
      output += "0";
    } else {
      output += line[position];
    }
  }
  output += "\n";
  return output;
}

function getGameState(input) {
  const linesAndTurn = input.split("\n");
  return [linesAndTurn.pop(), linesAndTurn];
}

module.exports = createReversi;
