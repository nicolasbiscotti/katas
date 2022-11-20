const createReversi = require("./reversi");

describe("Reversi Test", () => {
  describe("Create Reversi", () => {
    it("should try to track each sqaure", () => {
      let count = 0;
      const squares = [1, 2, 3, 4];
      function trackSquare(square) {
        if (square < 5) {
          count++;
        }
      }
      function createOutput() {}
      const reversi = createReversi(squares, trackSquare, createOutput);
      reversi("..\n..");
      expect(count).toEqual(4);
    });
    it("should return the output board with valid moves", () => {
      const squares = [];
      function trackSquare() {}
      function createOutput(input) {
        if (input === ".WB\n...\n...") {
          return "OWB\n...\n...";
        }
      }
      const reversi = createReversi(squares, trackSquare, createOutput);
      expect(reversi(".WB\n...\n...")).toEqual("OWB\n...\n...");
    });
  });

  describe("Create Square", () => {
    it("should create a square", () => {
      const square = createSquare(
        { value: ".", cordinates: { row: 0, col: 0 },  },
        [() => ["."], () => []]
      );
      square.isValidMoveFor("B");
      expect(square).toEqual({});
    });
  });
});
