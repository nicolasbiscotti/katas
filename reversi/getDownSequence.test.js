const getDownSequence = require("./getDownSequence");

describe("Get Dow Sequence", () => {
  const rows = [
    "........",
    "........",
    "B.......",
    "...B....",
    "...W....",
    "........",
    "......W.",
    ".O......",
  ];
  it("should return [] when position is (7, 5)", () => {
    expect(getDownSequence({ row: 7, col: 5 }, rows)).toEqual([]);
  });
  it("should return [] when position is (7, 8)", () => {
    expect(getDownSequence({ row: 5, col: 8 }, rows)).toEqual([]);
  });
  it("should return [] when position is (5, -1)", () => {
    expect(getDownSequence({ row: 5, col: -1 }, rows)).toEqual([]);
  });
  it("should return [] when position is (-1, 0)", () => {
    expect(getDownSequence({ row: -1, col: 0 }, rows)).toEqual([]);
  });
  it("should return ['O'] when position is (6, 1)", () => {
    expect(getDownSequence({ row: 6, col: 1 }, rows)).toEqual(["O"]);
  });
  it("should return ['.', 'O'] when position is (5, 1)", () => {
    expect(getDownSequence({ row: 5, col: 1 }, rows)).toEqual([".", "O"]);
  });
});
