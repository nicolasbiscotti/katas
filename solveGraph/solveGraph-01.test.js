const solveGraph = require("./solveGraph-01");

describe("Solve Graph 01", () => {
  it("should return true from A to B", () => {
    const graph = {
      A: ["B"],
    };
    expect(solveGraph(graph, "A", "B")).toEqual(true);
  });
  it("should return false from A to B", () => {
    const graph = {
      A: ["C"],
    };
    expect(solveGraph(graph, "A", "B")).toEqual(false);
  });
  it("should return false from A to B", () => {
    const graph = {
      C: ["B"],
    };
    expect(solveGraph(graph, "A", "B")).toEqual(false);
  });
  it("should return true from A to B", () => {
    const graph = {
      A: ["C"],
      C: ["B"],
    };
    expect(solveGraph(graph, "A", "B")).toEqual(true);
  });
  it("should return true from A to E", () => {
    const graph = {
      A: ["B"],
      B: ["C", "D"],
      D: ["E"],
    };
    expect(solveGraph(graph, "A", "E")).toEqual(true);
  });
  it("should retunr false from A to E", () => {
    const graph = {
      A: ["B"],
      B: ["A"],
    };
    expect(solveGraph(graph, "A", "E")).toEqual(false);
  });

  const graph = {
    a: ["c"],
    b: ["c"],
    c: ["s", "r"],
    d: ["a"],
    s: ["a", "c"],
    r: ["d"],
    z: ["z"]
  };
  it("should return true as we can get from a to r", function () {
    expect(solveGraph(graph, "a", "r")).toEqual(true);
  });
  it("should return true as we can get from a to d", function () {
    expect(solveGraph(graph, "a", "d")).toEqual(true);
  });
  it("should return false as we can not get from s to b", function () {
    expect(solveGraph(graph, "s", "b")).toEqual(false);
  });
});
