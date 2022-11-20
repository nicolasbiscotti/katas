const appCounter = counter({ count: 0 });

const countDisplay = createElement("div", {
  text: appCounter.getState().count,
});
appCounter.onCountChange(function () {
  setText(countDisplay, appCounter.getState().count);
});

const incrementButton = createElement("button", {
  text: "Increment Count",
  listeners: [
    {
      event: "click",
      fn: () => appCounter.increment(),
    },
  ],
});
const resetButton = createElement("button", {
  text: "Reset Count",
  listeners: [
    {
      event: "click",
      fn: () => appCounter.reset(),
    },
  ],
});

const app = createElement(
  "div",
  {},
  createElement("div", {}, countDisplay),
  createElement("div", {}, incrementButton, resetButton)
);

const root = document.querySelector("#root");
root.appendChild(app);
