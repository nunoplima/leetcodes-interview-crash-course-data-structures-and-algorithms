const dfs = (node, graph, seen) => {
  for (const neighbor of graph.get(node) || []) {
    if (!seen[neighbor]) {
      seen[neighbor] = true
      dfs(neighbor, graph, seen)
    }
  }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const graph = new Map()
  let n = isConnected.length;
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }

  const seen = new Array(isConnected.length).fill(false)
  let ans = 0
  for (let k = 0; k < isConnected.length; k++) {
    if (!seen[k]) {
      ans++
      seen[k] = true
      dfs(k, graph, seen)
    }
  }

  return ans
}