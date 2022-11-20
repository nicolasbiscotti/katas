const whoseTurn = require("./whoseTurn");

describe("Whose turn is it?", () => {
  it("should return B", () => {
    const board = `........
........
........
...BW...
...WB...
........
........
........
B`;
    expect(whoseTurn(board)).toEqual("B");
  });
});