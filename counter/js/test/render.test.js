const DOM = require("../render");
describe("createRoot test", () => {
  it("should append the element to the container", () => {
    const container = {
      children: [],
      appendChild: function (element) {
        this.children.push(element);
      },
    };

    DOM.createRoot(container).render({ type: "div" }, () => {});

    expect(container.children.length).toEqual(1);
  });

  it("should render the elemnt", () => {
    const container = {
      children: [],
      appendChild: function (element) {
        this.children.push(element);
      },
    };

    function render(element) {
      return element.type;
    }

    DOM.createRoot(container).render({ type: "div" }, render);

    expect(container.children.pop()).toEqual("div");
  });
});
