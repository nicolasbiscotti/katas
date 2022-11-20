const { getLeftSequence, positionOutOfBounds } = require("./getLeftSequence");

describe("Get Left Sequence", () => {
  describe("Position Out Of Bounds", () => {
    const boardSize = 8;
    it("should return true when position is (2, -1)", () => {
      expect(positionOutOfBounds({ row: 2, col: -1 }, boardSize)).toEqual(true);
    });
    it("should return true when position is (2, 8)", () => {
      expect(positionOutOfBounds({ row: 2, col: 8 }, boardSize)).toEqual(true);
    });
    it("should return true when position is (-1, 6)", () => {
      expect(positionOutOfBounds({ row: -1, col: 6 }, boardSize)).toEqual(true);
    });
    it("should return true when position is (8, 5)", () => {
      expect(positionOutOfBounds({ row: 8, col: 5 }, boardSize)).toEqual(true);
    });
    it("should return false for a good position", () => {
      expect(positionOutOfBounds({ row: 3, col: 0 }, boardSize)).toEqual(false);
    });
  });
  const boardRows = [
    "........",
    "........",
    "B.......",
    "...B....",
    "...W....",
    "........",
    "......W.",
    ".OX.....",
  ];
  const boardSize = 8;

  function outOfBounds() {
    return true;
  }
  function inBounds() {
    return false;
  }

  it("should return [] when position is (2, 0)", () => {
    const sequenceGetter = getLeftSequence({ boardRows, boardSize }, inBounds);
    expect(sequenceGetter({ row: 2, col: 0 })).toEqual([]);
  });
  it("should return [] when position is badPosition", () => {
    const sequenceGetter = getLeftSequence(
      { boardRows, boardSize },
      outOfBounds
    );
    expect(sequenceGetter({ row: -2, col: 2 })).toEqual([]);
  });
  it("should return ['B'] when position is (2, 1)", () => {
    const sequenceGetter = getLeftSequence({ boardRows, boardSize }, inBounds);
    expect(sequenceGetter({ row: 2, col: 1 })).toEqual(["B"]);
  });
  it("should return ['X', 'O', '.'] when position is (7, 3)", () => {
    const sequenceGetter = getLeftSequence({ boardRows, boardSize }, inBounds);
    expect(sequenceGetter({ row: 7, col: 3 })).toEqual(["X", "O", "."]);
  });
});
