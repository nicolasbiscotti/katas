const thereIsALineThatEnableToPlay = require("./thereIsALineThatEnableToPlay");

describe("Saerch in all adjacent lines", () => {
  it("should return true when a line enable to play", () => {
    const boardRows = [];
    const currentSquare = { row: 0, col: 1 };
    const playersTurn = "B";

    const board = {
      boardRows,
      currentSquare,
      playersTurn,
    };

    const adjacentLineFinders = [
      (boardRows, square) => [],
      (boardRows, sqaure) => ["."],
    ];
    function isLegalMove(playersTurn, adjacentLine) {
      if (playersTurn === "B" && adjacentLine[0] === ".") {
        return true;
      }
    }

    expect(
      thereIsALineThatEnableToPlay(board, adjacentLineFinders, isLegalMove)
    ).toEqual(true);
  });

  it("should return false when no line enable to play", () => {
    const boardRows = [];
    const currentSquare = { row: 0, col: 1 };
    const playersTurn = "B";

    const board = {
      boardRows,
      currentSquare,
      playersTurn,
    };

    const adjacentLineFinders = [
      (boardRows, square) => [],
      (boardRows, sqaure) => ["."],
    ];
    function isLegalMove() {
      return false;
    }

    expect(
      thereIsALineThatEnableToPlay(board, adjacentLineFinders, isLegalMove)
    ).toEqual(false);
  });
});
