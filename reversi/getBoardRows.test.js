const getBoardRows = require("./getBoardRows");

describe("Get Board Rows", () => {
  it("should return each row", () => {
    const input = `........
........
........
...BW...
...WB...
........
........
........
B`;
    const expectedRows = [
      "........",
      "........",
      "........",
      "...BW...",
      "...WB...",
      "........",
      "........",
      "........",
    ];

    expect(getBoardRows(input)).toEqual(expectedRows);
  });
});
