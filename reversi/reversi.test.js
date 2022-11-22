const { legalMovesForPlayerInTurn, createSquare } = require("./reversi");

describe("Reversi Test", () => {
  // getBoardPosition()
  // getPlayerInTurn()
  // getSquares()

  describe("Create Square", () => {
    it("should return {row:2, col:3}", () => {
      const square = createSquare({ coordinates: { row: 2, col: 3 } });
      expect(square.getCoordinates()).toEqual({ row: 2, col: 3 });
    });
    it("should return false when the square is busy", () => {
      const square = createSquare({
        coordinates: { row: 4, col: 2 },
        busyBy: "B",
        findFlippingLine: () => {},
      });
      expect(square.isLegalMoveFor("W")).toEqual(false);
    });
    it("should return true when square is empty and flipping line is found", () => {
      function findFlippingLine(coordinates, forPlayer) {
        if (!!coordinates && forPlayer === "W") {
          return true;
        }
      }

      const square = createSquare({
        coordinates: { row: 0, col: 0 },
        busyBy: null,
        findFlippingLine,
      });

      expect(square.isLegalMoveFor("W")).toEqual(true);
    });
    it("should return false when square is empty but no flipping line is found", () => {
      function findFlippingLine(coordinates, forPlayer) {
        if (!!coordinates && forPlayer === "B") {
          return false;
        }
        return true;
      }

      const square = createSquare({
        coordinates: { row: 3, col: 5 },
        busyBy: null,
        findFlippingLine,
      });

      expect(square.isLegalMoveFor("B")).toEqual(false);
    });
  });

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
