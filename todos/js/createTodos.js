function createTodos(initialState = {}, rootReducer) {
  const listeners = {};

  function getState() {
    return initialState;
  }
  function dispatch(action) {
    initialState = rootReducer(initialState, action);
    if (listeners[action.type]) {
      for (const listener of listeners[action.type]) {
        listener();
      }
    }
  }
  function register(actionType, listener) {
    if (listeners[actionType] === undefined) {
      listeners[actionType] = new Set();
    }
    listeners[actionType].add(listener);
  }

  return {
    getState,
    dispatch,
    register,
  };
}

module.exports = createTodos;
