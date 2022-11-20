"use strict";

const fizzbuzz = require("./fizzbuzz");
const numbers = require("./numbers");

describe("numbers", () => {
  const displayState = { count: 0, elements: [] };

  function display(string) {
    displayState.count += 1;
    displayState.elements.push(string);
  }

  function render(number) {
    return `x: ${number}`;
  }

  it("should display each number", () => {
    numbers(display).show(2, render);
    expect(displayState.count).toEqual(2);
  });

  it("should render each number", () => {
    numbers(display).show(2, render);
    expect(displayState.elements[1]).toEqual("x: 2");
  });

  it("should render using fizzbuzz", () => {
    numbers(console.log).show(100, fizzbuzz);
  });
});
