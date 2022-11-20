"use strict";

function numbers(display) {
  function show(endOfRange, render) {
    for (let i = 1; i <= endOfRange; i++) {
      display(render(i));
    }
  }

  return { show };
}

module.exports = numbers;
