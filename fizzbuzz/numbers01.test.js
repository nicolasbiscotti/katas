const fizzbuzz = require("./fizzbuzz01");
const numbers = require("./numbers01");

describe("Numbers01", () => {
  it("should display one number", () => {
    const display = [];
    function printOutput(str) {
      display.push(str);
    }
    numbers(1, printOutput).show(() => {});
    expect(display.length).toEqual(1);
  });
  it("should display numbers", () => {
    const display = [];
    function printOutput(str) {
      display.push(str);
    }
    numbers(2, printOutput).show(() => {});
    expect(display.length).toEqual(2);
  });
  it("should render numbers", () => {
    const display = [];
    function printOutput(str) {
      display.push(str);
    }
    function render(number) {
      return `x:${number}`;
    }
    numbers(3, printOutput).show(render);
    expect(display.pop()).toEqual("x:3");
    expect(display.pop()).toEqual("x:2");
  });
  it("should log FizzBuzz result", () => {
    numbers(100, console.log).show(fizzbuzz);
  });
});
