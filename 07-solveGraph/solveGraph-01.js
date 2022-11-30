function solveGraph(graph, x, y, visitedVertices = {}) {
  let isSuccessor;
  if (visitedVertices[x] || !isPredecessor(x, graph)) {
    isSuccessor = false;
  } else {
    // no fue visitadoi y ademas es un predecesor.
    visitedVertices[x] = true;
    const directSuccesors = graph[x];
    if (isDirectSuccessor(directSuccesors, y)) {
      isSuccessor = true;
    } else {
      isSuccessor = isIndirectSuccesor({
        graph,
        directSuccesors,
        y,
        solveGraph,
        visitedVertices,
      });
    }
  }

  return isSuccessor;
}

function isIndirectSuccesor({
  graph,
  directSuccesors,
  y,
  solveGraph,
  visitedVertices,
}) {
  // analizar para cada uno de los sucesores directos de x
  // ejecutando solveGraph
  for (let successor of directSuccesors) {
    const isSuccessor = solveGraph(graph, successor, y, visitedVertices);
    if (isSuccessor) {
      return true;
    }
  }
  return false;
}

function isPredecessor(x, graph) {
  return graph[x] !== undefined;
}

function isDirectSuccessor(directSuccesors, y) {
  return directSuccesors.includes(y);
}

module.exports = solveGraph;
