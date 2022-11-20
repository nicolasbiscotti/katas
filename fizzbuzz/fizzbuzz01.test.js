const fizzbuzz = require("./fizzbuzz01");

describe("FizzBuzz01", () => {
  // fizzbuzz(8)  -> "8"
  // fizzbuzz(3)  -> "Fizz"
  // fizzbuzz(5)  -> "Buzz"
  // fizzbuzz(15) -> "FizzBuzz"
  it("should return '8' when 8 is recived", () => {
    expect(fizzbuzz(8)).toEqual("8");
  });
  it("should return 'Fizz' when 3 is recived", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("should return 'Buzz' when 5 is recived", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("should return 'Fizz' when 6 is recived", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  it("should return 'Buzz' when 10 is recived", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  it("should return 'FizzBuzz' when 15 is recived", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
  
});
