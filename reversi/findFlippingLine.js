function createFinder(boardPosition, lineGetters, isLegalMove) {
  return function (coordinates, forPlayer) {
    for (const getter of lineGetters) {
      const adjacentLine = getter(coordinates, boardPosition);
      if (isLegalMove(forPlayer, adjacentLine)) {
        return true;
      }
    }
    return false;
  };
}
module.exports = createFinder;
