const findWordStartingWith = require("./findWordStartingWith");

describe("Find Word Starting With", () => {
  it("should return [0] when 'he' is the string", () => {
    const book = { id: 1, text: "hello" };
    expect(findWordStartingWith(book, "he")).toEqual([0]);
  });
  it("should return [0] when 'hE' is the string", () => {
    const book = { id: 1, text: "Hello" };
    expect(findWordStartingWith(book, "hE")).toEqual([0]);
  });
  it("should return [6] when 'MO' is the string", () => {
    const book = { id: 1, text: "Hello mOther" };
    expect(findWordStartingWith(book, "MO")).toEqual([6]);
  });
});
