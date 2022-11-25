const createReversi = require("./reversi");

describe("Reversi Test", () => {
  it("should return one legal move for B", () => {
    const input = ".WB.\n....\n....\n....\nB";
    const output = "0WB.\n....\n....\n....\nB";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return the same board position", () => {
    const input = "..B.\n....\n....\n....\nB";
    const output = "..B.\n....\n....\n....\nB";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return one legal move for B", () => {
    const input = "..WB\n....\n....\n....\nB";
    const output = ".0WB\n....\n....\n....\nB";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return one legal move for B", () => {
    const input = ".BW.\n....\n....\n....\nB";
    const output = ".BW0\n....\n....\n....\nB";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return one legal move for B", () => {
    const input = "....\n.WB.\n....\n....\nB";
    const output = "....\n0WB.\n....\n....\nB";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return the same board position", () => {
    const input = ".W..\n....\n....\n....\nW";
    const output = ".W..\n....\n....\n....\nW";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return the same board position", () => {
    const input = ".....\n.....\n.....\n.W.B.\n.....\nW";
    const output = ".....\n.....\n.....\n.W.B.\n.....\nW";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
  it("should return one legal move for B", () => {
    const input = "...\n.W.\n.B.\nB";
    const output = ".0.\n.W.\n.B.\nB";
    const reversi = createReversi();
    expect(reversi(input)).toEqual(output);
  });
});
