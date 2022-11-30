const mdSumArray = require("./multiSumArra");

describe("Multidimensional Sum Array", () => {
  it("shoul return 0", () => {
    expect(mdSumArray([])).toEqual(0);
  });

  it("should return 3", () => {
    expect(mdSumArray([3])).toEqual(3);
  });

  it("should return 7", () => {
    expect(mdSumArray([3, 4])).toEqual(7);
  });

  it("should return 7", () => {
    expect(mdSumArray([[3, 4]])).toEqual(7);
  });

  it("should return 26", () => {
    expect(mdSumArray([2, [3, 4], 5, [-3, [6, [4, 5]]]])).toEqual(26);
  });
});
