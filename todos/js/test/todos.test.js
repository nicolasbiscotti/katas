const createTodos = require("../createTodos");

describe("Todos global state Test", () => {
  it("should return the initial state", () => {
    const todos = createTodos({ todoList: [] });
    expect(todos.getState()).toEqual({ todoList: [] });
  });
  it("should call rootReducer with initialState and accion", () => {
    let newState = null;
    let dispatchedAction = null;

    function rootReducer(state, action) {
      newState = state;
      dispatchedAction = action;
    }

    const todos = createTodos({ todoList: [] }, rootReducer);
    todos.dispatch({
      type: "addTodo",
      payload: { id: "blabla" },
    });

    expect(newState).toEqual({ todoList: [] });
    expect(dispatchedAction).toEqual({
      type: "addTodo",
      payload: { id: "blabla" },
    });
  });
  it("should change the initial state", () => {
    function rootReducer(state, action) {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    const todos = createTodos({ todoList: [] }, rootReducer);
    todos.dispatch({ payload: { id: "2", title: "make the app" } });
    todos.dispatch({ payload: { id: "3" } });
    expect(todos.getState()).toEqual({
      todoList: [{ id: "2", title: "make the app" }, { id: "3" }],
    });
  });
  it("should call each listeners", () => {
    let count = 0;
    function listener() {
      count++;
    }
    function listenerOne() {
      count++;
    }

    const todos = createTodos({}, () => {});
    todos.register("addTodo", listener);
    todos.register("addTodo", listenerOne);
    todos.dispatch({ type: "addTodo" });

    expect(count).toEqual(2);
  });
  it("should call each listeners on the correct action", () => {
    let count = 0;
    function listener() {
      count++;
    }
    function listenerOne() {
      count++;
    }

    const todos = createTodos({}, () => {});
    todos.register("addTodo", listener);
    todos.register("removeTodo", listenerOne);
    todos.dispatch({ type: "addTodo" });

    expect(count).toEqual(1);
  });
});
