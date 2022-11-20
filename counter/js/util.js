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
function createElement(type, props, ...children) {
  // render an element e.g "div" --> <div></div>
  const element = document.createElement(type);
  // ask for undefined because 0 or "" are falsy
  if (props.text !== undefined) {
    setText(element, props.text);
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
function setText(element, text) {
  if (element.firstChild !== null) {
    element.removeChild(element.firstChild);
  }
  element.appendChild(document.createTextNode(text));
}
function addListener({ event, element, listener }) {
  element.addEventListener(event, listener);
}

