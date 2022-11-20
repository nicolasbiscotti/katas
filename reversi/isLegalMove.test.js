const isLegalMove = require("./isLegalMove");

describe("isLegalMove function", () => {
  it("should return false", () => {
    expect(isLegalMove("R", [".", "."])).toEqual(false);
  });

  it("should return false", () => {
    expect(isLegalMove("W", ".")).toEqual(false);
  });

  it("should return false", () => {
    expect(isLegalMove("B", ["."])).toEqual(false);
  });

  it("should return false when sequence starts with '.'", () => {
    expect(isLegalMove("B", [".", "."])).toEqual(false);
  });

  it("should return false when sequence starts with a players counter color", () => {
    expect(isLegalMove("B", ["B", "."])).toEqual(false);
  });

  it("should return false when sequence starts with a oponent counter but the next is empty", () => {
    expect(isLegalMove("B", ["W", "."])).toEqual(false);
  });

  it("should return false when sequence starts with a oponent counter next is oponent to", () => {
    expect(isLegalMove("B", ["W", "W"])).toEqual(false);
  });

  it('should return true when sequence is ["W", "B"]', () => {
    expect(isLegalMove("B", ["W", "B"])).toEqual(true);
  });

  it('should return true when sequence is ["W", "W", "B"]', () => {
    expect(isLegalMove("B", ["W", "W", "B"])).toEqual(true);
  });

  it('should return false when sequence is ["W", "W", "W"]', () => {
    expect(isLegalMove("B", ["W", "W", "W"])).toEqual(false);
  });

  it('should return true when sequence is ["W", "B", "W"]', () => {
    expect(isLegalMove("B", ["W", "B", "W"])).toEqual(true);
  });
});
