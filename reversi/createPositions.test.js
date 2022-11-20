const createPositions = require("./createPositions");

/**************
 * @linefinders = [ (coordinates, boardRows) => [] | [".", "B"] ]
 * @inputParser = (input) => ({
 *     boardRows: ["..", "BW"], 
 *     boardSize: number, 
 *     playersTurn: "B"
 * })
 * @walkBoard = (input, inputParser, lineFinders) => ({
 *     coordinates: () => {row:1, col:2},
 *     isValidMove: () => boolean  
 * })
 *
 *
 */

describe("Create Positions Test", () => {
  const board = (input) => {
    if (input === "../n../nB") {
      return {
        boardRows: () => ["..", ".."],
        boardSize: () => 2,
        playersTurn: () => "B",
        isAnEmptySquare: (coordinates) => {
          if (coordinates.row !== undefined && coordinates.col !== undefined) {
            return true;
          }
        },
      };
    }
  };

  it("should create each square of the board", () => {
    const positions = createPositions("../n../nB", board);

    expect(positions.next().value.coordinates).toEqual({ row: 0, col: 0 });

    positions.next();
    positions.next();

    expect(positions.next().value.coordinates).toEqual({ row: 1, col: 1 });
    expect(positions.next()).toEqual({ value: null, done: true });
  });
  it("should create an empty square for the first position", () => {
    const positions = createPositions("../n../nB", board);
    expect(positions.next().value.isEmpty).toEqual(true);
  });
  it("should create each square with a propety boardRows", () => {
    const positions = createPositions("../n../nB", board);
    expect(positions.next().value.boardRows).toEqual(["..", ".."]);
  });
  it("should create each square with a property playersTurn", () => {
    const positions = createPositions("../n../nB", board);
    expect(positions.next().value.playersTurn).toEqual("B");
  });
});
