const sum = require("./sum");

describe("sum", () => {
  it("should return 5 when 2 and 3 passed as argument", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
