const getLeftDownSequence = require("./getLeftDownSequence");

describe("Get Left Down Sequence", () => {
  const rows = [
    "........",
    "........",
    "B.......",
    "...B....",
    "...W....",
    "........",
    "......W.",
    "........",
  ];
  it("should return [] when position is (0, 0)", () => {
    expect(getLeftDownSequence({ row: 0, col: 0 }, [])).toEqual([]);
  });
  it("should return [] when position is (7, 2)", () => {
    expect(getLeftDownSequence({ row: 7, col: 2 }, [])).toEqual([]);
  });
  it("should return ['.'] when position is (0, 1)", () => {
    expect(getLeftDownSequence({ row: 0, col: 1 }, rows)).toEqual(["."]);
  });
  it("should return ['.', 'B'] when position is (0, 2)", () => {
    expect(getLeftDownSequence({ row: 0, col: 2 }, rows)).toEqual([".", "B"]);
  });
  it("should return ['W', '.'] when position is (5, 7)", () => {
    expect(getLeftDownSequence({ row: 5, col: 7 }, rows)).toEqual(["W", "."]);
  });
});
