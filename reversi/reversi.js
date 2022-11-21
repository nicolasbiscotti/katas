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

module.exports = { createReversi, legalMovesForPlayerInTurn };
