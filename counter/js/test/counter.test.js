const counter = require("../counter");

describe("Counter Test", () => {
  it("should return the initial state", () => {
    expect(counter({ count: 0 }).getState()).toEqual({ count: 0 });
  });
  it("should add one to the count", () => {
    const testCounter = counter({ count: 2 });
    testCounter.increment();
    expect(testCounter.getState()).toEqual({ count: 3 });
  });
  it("should call the listeners when the count change", () => {
    let count = 0;
    function listenerOne() {
      count++;
    }
    function listenerTwo() {
      count++;
    }

    const testCounter = counter({ count: 0 });
    testCounter.onCountChange(listenerOne);
    testCounter.onCountChange(listenerTwo);

    testCounter.increment();
    expect(count).toEqual(2);
  });
  it("should reset the count to the initial state", () => {
    const testCounter = counter({ count: 3 });
    testCounter.increment();
    testCounter.increment();
    testCounter.reset();
    expect(testCounter.getState().count).toEqual(3);
    testCounter.increment();
    testCounter.reset();
    expect(testCounter.getState().count).toEqual(3);
  });
  it("should call the listeners when the count is reset", () => {
    let count = 0;
    function listener() {
      count++;
    }
    function listenerOne() {
      count++;
    }
    const testCount = counter({ count: 0 });
    testCount.increment();
    testCount.onCountChange(listener);
    testCount.onCountChange(listenerOne);
    testCount.reset();
    expect(count).toEqual(2);
  });
  it("should ignore call the listeners", () => {
    let count = 0;
    function listener() {
      count++;
    }
    function listenerOne() {
      count++;
    }
    const testCount = counter({ count: 0 });
    testCount.onCountChange(listener);
    testCount.onCountChange(listenerOne);
    testCount.reset();
    expect(count).toEqual(0);
  });
});
