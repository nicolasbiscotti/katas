const getRigthSequence = require("./getRigthSequence");

describe("Get Rigth Sequence", () => {
  const rows = [
    "........",
    "........",
    "B.......",
    "...B....",
    "...W....",
    ".......B",
    "......W.",
    "........",
  ];

  it("should return [] when position is (4, 7)", () => {
    expect(getRigthSequence({ row: 4, col: 7 }, rows)).toEqual([]);
  });

  it("should return ['B'] when position is (5, 6)", () => {
    expect(getRigthSequence({ row: 5, col: 6 }, rows)).toEqual(["B"]);
  });
  it("should return ['.', '.', '.'] when position is (1, 4)", () => {
    expect(getRigthSequence({ row: 1, col: 4 }, rows)).toEqual([".", ".", "."]);
  });
});
