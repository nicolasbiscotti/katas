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
function createElement(type, props, ...children) {
  // render an element e.g "div" --> <div></div>
  const element = document.createElement(type);
  // ask for undefined because 0 or "" are falsy
  if (props.text !== undefined) {
    setText(element, props.text);
  }
  if (props.value !== undefined) {
    setValue(element, props.value);
  }
  if (props.listeners) {
    for (const listener of props.listeners) {
      addListener({ event: listener.event, element, listener: listener.fn });
    }
  }
  // I assume that the children are already rendered
  for (const child of children) {
    element.appendChild(child);
  }
  return element;
}
function setValue(element, value) {
  element.value = value;
}
function setText(element, text) {
  if (element.firstChild !== null) {
    element.removeChild(element.firstChild);
  }
  element.appendChild(document.createTextNode(text));
}
function addListener({ event, element, listener }) {
  element.addEventListener(event, listener);
}

// this function must be tested!!!
function rootReducer(state, action) {
  if (action.type === "addTodo") {
    return { ...state, todoList: [...state.todoList, action.payload] };
  }
  if (action.type === "setTitle") {
    return { ...state, title: action.payload };
  }
  return { ...state };
}

const todos = createTodos({ title: "", todoList: [] }, rootReducer);

const todoTitle = createElement("input", {
  value: todos.getState().title,
  listeners: [
    {
      event: "keyup",
      fn: (e) => {
        todos.dispatch({ type: "setTitle", payload: e.target.value });
      },
    },
  ],
});
todos.register("setTitle", () => {
  setValue(todoTitle, todos.getState().title);
});

const div = createElement("div", {});
todos.register("setTitle", () => {
  setText(div, todos.getState().title);
});

const todo = { id: "2", title: "hello", completed: false };
const todoItem = document.createElement("li");
const todoCompleteState = document.createElement("input");

const app = createElement("div", {}, createElement("div", {}, todoTitle, div));

const root = document.querySelector("#root");
root.appendChild(app);
