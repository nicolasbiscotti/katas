function numbers(upTo, display) {
  function show(render) {
    for (let i = 1; i <= upTo; i++) {
      display(render(i));
    }
  }
  return {
    show,
  };
}
module.exports = numbers;
