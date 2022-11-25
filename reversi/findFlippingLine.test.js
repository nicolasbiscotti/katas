const createFinder = require("./findFlippingLine");

describe("Find Flipping Line", () => {
  it("should return false when no flipping line is found", () => {
    const boardPosition = [".B", "W."];
    function getterOne(coordinates, boardPosition) {
      if (!!coordinates && !!boardPosition) {
        return [];
      }
    }
    const lineGetters = [getterOne];

    function isLegalMove(forPlayer, adjacentLine) {
      if (!!forPlayer && adjacentLine.length === 0) {
        return false;
      } else {
        return true;
      }
    }

    const findFlippingLine = createFinder(
      boardPosition,
      lineGetters,
      isLegalMove
    );

    expect(findFlippingLine({ row: 0, col: 0 }, "B")).toEqual(false);
  });
});
