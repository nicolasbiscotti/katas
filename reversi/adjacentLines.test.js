const AdjacentLines = require("./adjacentLines");

describe("Adjacent Lines Test", () => {
  it("should return three lines for 0", () => {
    const board = {
      length: () => 2,
      rows: () => ["..", "BW"],
      cols: () => [".B", ".W"],
      getTurn: () => "B",
    };
    const adjacentLines = new AdjacentLines(board);

    expect(adjacentLines.getLinesFor(0)).toEqual([".", "W", "B"]);
  });
  it("should return three lines for 3", () => {
    const board = {
      length: () => 2,
      rows: () => ["..", "BW"],
      cols: () => [".B", ".W"],
      getTurn: () => "B",
    };
    const adjacentLines = new AdjacentLines(board);

    expect(adjacentLines.getLinesFor(3)).toEqual(["B", ".", "."]);
  });
  it("should return three lines, with two squares each, for 0", () => {
    const board = {
      length: () => 3,
      rows: () => ["...", ".BW", "W.."],
      cols: () => ["..W", ".B.", ".W."],
      getTurn: () => "B",
    };
    const adjacentLines = new AdjacentLines(board);

    expect(adjacentLines.getLinesFor(0)).toEqual(["..", "B.", ".W"]);
  });
  it("should return three lines, with two squares each, for 8", () => {
    const board = {
      length: () => 3,
      rows: () => ["...", ".BW", "W.."],
      cols: () => ["..W", ".B.", ".W."],
      getTurn: () => "B",
    };
    const adjacentLines = new AdjacentLines(board);

    expect(adjacentLines.getLinesFor(8)).toEqual([".W", "B.", "W."]);
  });
  it("should return eight lines for 6", () => {
    const board = {
      length: () => 4,
      rows: () => ["....", ".BB.", ".W..", "...."],
      cols: () => ["....", ".BW.", ".B..", "...."],
      getTurn: () => "B",
    };
    const adjacentLines = new AdjacentLines(board);

    expect(adjacentLines.getLinesFor(6)).toEqual([
      ".",
      ".",
      "..",
      "W.",
      "B.",
      ".",
      ".",
      ".",
    ]);
  });
});
