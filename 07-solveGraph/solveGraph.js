function solveGraph(graph, from, to, visited = {}) {
  if (!visited) {
    visited[from] = true;
  }
  if (graph[from]) {
    if (graph[from].includes(to)) {
      return true;
    } else {
      for (const apex of graph[from]) {
        if (!visited[apex] && solveGraph(graph, apex, to)) {
          return true;
        }
      }
      return false;
    }
  } else {
    return false;
  }
}
module.exports = solveGraph;
