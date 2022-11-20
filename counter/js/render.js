function renderElement(element) {
  const { type, props, children } = element;

  if (typeof type === "function") {
    return renderElement(type(props, children));
  }

  if (typeof type === "string") {
    const element = document.createElement(type);

    children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(renderElement(child));
      }
    });

    return element;
  }
}

function createRoot(root) {
  function render(element, renderFunction) {
    root.appendChild(renderFunction(element));
  }

  return {
    render,
  };
}

module.exports = {
  createRoot,
};
