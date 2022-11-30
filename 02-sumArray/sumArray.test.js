const sumArray = require("./sumArray");

describe("Sum Array", () => {
  it("should return true when the array is [2, 4] an the number is 6", () => {
    expect(sumArray([2, 4], 6)).toEqual(true);
  });

  it("should return true when the array is [2, 4, 6] an the number is 6", () => {
    expect(sumArray([2, 4, 6], 6)).toEqual(true);
  });

  it("should return true when the array is [2, 4, 6] an the number is 10", () => {
    expect(sumArray([2, 4, 6], 10)).toEqual(true);
  });

  it("should return false when the array is [2, 4, 6] an the number is 11", () => {
    expect(sumArray([2, 4, 6], 11)).toEqual(false);
  });

  // the sum is smaller than the minimun sum that can achive with the available terms
  it("should return false when the array is [2, 4, 6] an the number is 5", () => {
    expect(sumArray([2, 4, 6], 5)).toEqual(false);
  });
  // the sum is in between the sums that can achieve with the terms
  it("should return false when the array is [2, 4, 6] an the number is 7", () => {
    expect(sumArray([2, 4, 6], 7)).toEqual(false);
  });
});
