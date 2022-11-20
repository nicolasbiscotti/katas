const getSequences = require("./getSequences");

describe("Get Sequences", () => {
  const rows = [
    "B.......",
    ".......W",
    "........",
    "...BW...",
    "...WB...",
    "........",
    "........",
    "........",
  ];
  it("should call each sequence getter", () => {
    let count = 0;
    const sequenceGetters = [
      () => {
        count++;
      },
      () => {
        count++;
      },
    ];
    getSequences({ row: 1, col: 2 }, rows, sequenceGetters);
    expect(count).toEqual(2);
  });
  it("should return [['B', 'W']]", () => {
    const sequenceGetters = [
      (position, boardRows) => {
        if (position !== undefined && boardRows !== undefined) {
          return ["B", "W"];
        }
      },
    ];
    expect(getSequences({ row: 1, col: 2 }, rows, sequenceGetters)).toEqual([
      ["B", "W"],
    ]);
  });
});
