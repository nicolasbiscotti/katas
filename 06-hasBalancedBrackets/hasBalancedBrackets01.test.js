// recibe un string con brackets como input
// e.g --> "(" - "()" - "({){]"
// el objetivo es retornar true si los brackets estan balanceados

const hasBalancedBrackets = require("./hasBalancedBrackets01");

// o false en caso contrario.
describe("Has Balanced Brackets 01", () => {
  it("should return false for '('", () => {
    expect(hasBalancedBrackets("(")).toEqual(false);
  });
  it("should return false for ')('", () => {
    expect(hasBalancedBrackets(")(")).toEqual(false);
  });
  it("should return true for '{}'", () => {
    expect(hasBalancedBrackets("{}")).toEqual(true);
  });
  it("should return false for '{)'", () => {
    expect(hasBalancedBrackets("{)")).toEqual(false);
  });
  it("should return false for '({)}'", () => {
    expect(hasBalancedBrackets("({)}")).toEqual(false);
  });
  it("should return true for '[({})]'", () => {
    expect(hasBalancedBrackets("[({})]")).toEqual(true);
  });
});
