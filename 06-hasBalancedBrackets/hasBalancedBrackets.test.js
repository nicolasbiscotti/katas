const hasBalancedBrackets = require("./hasBalancedBrackets");

describe("Has Balanced Brackets", () => {
  it("should reurn false when '(' is passed", () => {
    expect(hasBalancedBrackets("(")).toEqual(false);
  });
  it("should return false when '(()' is passed", () => {
    expect(hasBalancedBrackets("(()")).toEqual(false);
  });
  it("should return false when '(('", () => {
    expect(hasBalancedBrackets("((")).toEqual(false);
  });
  it("should return true when '()'", () => {
    expect(hasBalancedBrackets("()")).toEqual(true);
  });
  it("should return false '(][)'", () => {
    expect(hasBalancedBrackets("(][)")).toEqual(false);
  });
  it("should retun false '([}{][()])'", () => {
    expect(hasBalancedBrackets("([}{][()])")).toEqual(false);
  });
  it("should return false if called with {[(])}", function () {
    expect(hasBalancedBrackets("{[(])}")).toEqual(false);
  });
});
