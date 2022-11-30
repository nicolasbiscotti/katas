function stack() {
  let top = null;
  let minValue = null;

  function peek() {
    if (top === null) {
      return null;
    } else {
      return top.value;
    }
  }

  function push(value) {
    if (minValue === null) {
      minValue = { value, next: null };
    } else {
      minValue = { value: Math.min(value, minValue.value), next: minValue };
    }
    top = { value, bellow: top };
  }

  function pop() {
    const result = peek();
    if (top !== null) {
      top = top.bellow;
      minValue = minValue.next;
    }
    return result;
  }

  function min() {
    if (minValue === null) {
      return null;
    } else {
      return minValue.value;
    }
  }

  return {
    peek,
    push,
    pop,
    min,
  };
}
module.exports = stack;
