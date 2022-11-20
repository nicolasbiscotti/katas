function counter(initialState) {
  const initialCount = initialState.count;
  const incrementListeners = new Set();

  function changeCount(count) {
    initialState.count = count;
    for (const listener of incrementListeners) {
      listener();
    }
  }
  function getState() {
    return initialState;
  }
  function increment() {
    changeCount(initialState.count + 1);
  }
  function onCountChange(listener) {
    incrementListeners.add(listener);
  }
  function reset() {
    if (initialState.count !== initialCount) {
      changeCount(initialCount);
    }
  }
  return {
    getState,
    increment,
    onCountChange,
    reset,
  };
}
module.exports = counter;
