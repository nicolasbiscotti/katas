const solveGraph = require("./solveGraph");

describe("Solve Graph", () => {
  it("should return true for a -> b", () => {
    const graph = {
      a: ["b"],
    };

    expect(solveGraph(graph, "a", "b")).toEqual(true);
  });

  it("should return true for a -> b", () => {
    const graph = {
      a: ["c"],
      c: ["b"],
    };

    expect(solveGraph(graph, "a", "b")).toEqual(true);
  });

  it("should return true for a -> b", () => {
    const graph = {
      a: ["c"],
      c: ["d"],
      d: ["b"],
    };

    expect(solveGraph(graph, "a", "b")).toEqual(true);
  });

  it("should return false for a -> b", () => {
    const graph = {
      a: ["c"],
      c: ["d"],
    };

    expect(solveGraph(graph, "a", "b")).toEqual(false);
  });

  it("should return true for a -> b", () => {
    const graph = {
      a: ["c"],
      c: ["d", "e"],
      e: ["b"],
    };

    expect(solveGraph(graph, "a", "b")).toEqual(true);
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
