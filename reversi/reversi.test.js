const { legalMovesForPlayerInTurn } = require("./reversi");

describe("Reversi Test", () => {
  describe("Legal Moves for Player in Turn", () => {
    it("should return [] for player W turn", () => {
      const square = {
        isLegalMoveFor: (player) => player === "B",
        getCoordinates: () => ({ row: 0, col: 0 }),
      };
      expect(legalMovesForPlayerInTurn("W", [square])).toEqual([]);
    });

    it("should return [{row:2, col:3}] for player W turn", () => {
      const square = {
        isLegalMoveFor: (player) => player === "W",
        getCoordinates: () => ({ row: 2, col: 3 }),
      };
      expect(legalMovesForPlayerInTurn("W", [square])).toEqual([
        { row: 2, col: 3 },
      ]);
    });
    it("should return [{row:1, col:2}] for player B turn", () => {
      const squareOne = {
        isLegalMoveFor: (player) => player === "W",
        getCoordinates: () => ({ row: 1, col: 1 }),
      };
      const squareTwo = {
        isLegalMoveFor: (player) => player === "B",
        getCoordinates: () => ({ row: 1, col: 2 }),
      };
      expect(legalMovesForPlayerInTurn("B", [squareOne, squareTwo])).toEqual([
        { row: 1, col: 2 },
      ]);
    });
  });

  // describe("Mark Legal Moves", () => {
  //   it("should ")
  // })
});
