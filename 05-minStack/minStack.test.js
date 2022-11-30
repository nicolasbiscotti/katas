const stack = require("./minStack");

describe("Min Stack", () => {
  describe("peek method", () => {
    it("should return null when the stack is emapty", () => {
      const testStack = stack();
      expect(testStack.peek()).toEqual(null);
    });
  });

  describe("push method", () => {
    it("should put 6 on the top of the stack", () => {
      const testStack = stack();
      testStack.push(6);
      expect(testStack.peek()).toEqual(6);
    });
  });

  describe("pop method", () => {
    it("should delete the top of the stack", () => {
      const testStack = stack();
      testStack.push(8);
      testStack.pop();
      expect(testStack.peek()).toEqual(null);
    });

    it("should retuen 7", () => {
      const testStack = stack();
      testStack.push(7);
      expect(testStack.pop()).toEqual(7);
    });

    it("should return 3 and clean when push 3 and 4 then pop twice", () => {
      const testStack = stack();
      testStack.push(3);
      testStack.push(4);
      testStack.pop();
      expect(testStack.pop()).toEqual(3);
      expect(testStack.peek()).toEqual(null);
    });
  });

  describe("min method", () => {
    it("should return 9", () => {
      const testStack = stack();
      testStack.push(34);
      testStack.push(9);
      expect(testStack.min()).toEqual(9);
    });

    it("should retun 34", () => {
      const testStack = stack();
      testStack.push(34);
      testStack.push(9);
      testStack.pop();
      expect(testStack.min()).toEqual(34);
    });

    it("should retun 14", () => {
      const testStack = stack();
      testStack.push(14);
      testStack.push(34);
      testStack.push(9);
      testStack.pop();
      expect(testStack.min()).toEqual(14);
    });

    it("should return null", () => {
      const testStack = stack();
      testStack.push(34);
      testStack.push(14);
      testStack.push(9);
      testStack.pop();
      expect(testStack.min()).toEqual(14);
      testStack.pop();
      expect(testStack.min()).toEqual(34);
      testStack.pop();
      expect(testStack.min()).toEqual(null);
    });
  });
});
