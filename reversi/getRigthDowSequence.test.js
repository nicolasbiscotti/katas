const getRigthDowSequence = require("./getRigthDowSequence");

describe("Get Rigth Down Sequence", () => {
  const rows = [
    "........",
    ".......N",
    "B......M",
    "...B....",
    "...W....",
    ".......B",
    ".MM...W.",
    "R..R....",
  ];

  it("should return [] when position is (0, 7)", () => {
    expect(getRigthDowSequence({ row: 0, col: 7 }, rows)).toEqual([]);
  });

  it("should return [] when position is (7, 5)", () => {
    expect(getRigthDowSequence({ row: 7, col: 5 }, rows)).toEqual([]);
  });
  it("should return ['N'] when position is (0, 6)", () => {
    expect(getRigthDowSequence({ row: 0, col: 6 }, rows)).toEqual(["N"]);
  });
  it("should return ['.', 'M'] when position is (0, 5)", () => {
    expect(getRigthDowSequence({ row: 0, col: 5 }, rows)).toEqual([".", "M"]);
  });
  it("should return ['M', 'R'] when position is (5, 1)", () => {
    expect(getRigthDowSequence({ row: 5, col: 1 }, rows)).toEqual(["M", "R"]);
  });
});
