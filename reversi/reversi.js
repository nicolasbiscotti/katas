function createReversi() {}

function legalMovesForPlayerInTurn(player, squares) {
  const legalMoves = [];
  for (const square of squares) {
    if (square.isLegalMoveFor(player)) {
      legalMoves.push(square.getCoordinates());
    }
  }
  return legalMoves;
}

function createSquare({ coordinates, busyBy, findFlippingLine }) {
  function getCoordinates() {
    return { ...coordinates };
  }
  function isLegalMoveFor(player) {
    const isEmpty = busyBy === null;
    const flipsAnyOpponentsCounter = findFlippingLine(coordinates, player);
    const isLegalMove = isEmpty && flipsAnyOpponentsCounter;
    if (isLegalMove) {
      return true;
    } else {
      return false;
    }
  }
  return {
    getCoordinates,
    isLegalMoveFor,
  };
}

module.exports = { createReversi, legalMovesForPlayerInTurn, createSquare };
