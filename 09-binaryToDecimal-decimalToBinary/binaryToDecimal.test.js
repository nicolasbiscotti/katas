const { binaryToDecimal, decimalToBinary } = require("./binaryToDecimal");

describe("Binary to Decimal and Decimal to Binary", () => {
  describe("Binary To Decimal Test", () => {
    it("should return 0 for '0'", () => {
      expect(binaryToDecimal("0")).toEqual(0);
    });
    it("should return 2 for '10'", () => {
      expect(binaryToDecimal("10")).toEqual(2);
    });
  });

  describe("Decimal To Binary Test", () => {
    it("should return '0' for 0", () => {
      expect(decimalToBinary(0)).toEqual("0");
    });
    it("should return '10' for 2", () => {
      expect(decimalToBinary(2)).toEqual("10");
    });
    it("should return '100' for 4", () => {
      expect(decimalToBinary(4)).toEqual("100");
    });
  });
});
