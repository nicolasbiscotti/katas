const maxValue = require("./maxvalue");

describe("MaxValue", () => {
  it("should return -5 when [5] is passed", () => {
    expect(maxValue([5])).toEqual(-5);
  });

  it("shoul return 5 when [5, 10] is passed", () => {
    expect(maxValue([5, 10])).toEqual(5);
  });

  it("should return 10 when [5, 10, 15] is passed", () => {
    expect(maxValue([5, 10, 15])).toEqual(10);
  });

  it("should return -1 when [10, 25, 3, 100] is passed", () => {
    expect(maxValue([10, 25, 3, 100])).toEqual(97);
  });

  it("should return 0 when [10, 10, 9, 8, 2, 1, 0] is passed", () => {
    expect(maxValue([10, 10, 9, 8, 2, 1, 0])).toEqual(0);
  });
});
