// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const dfs = node => {
    seen[node] = true
    for (const neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        dfs(neighbor)
      }
    }
  }

  const graph = new Map()
  for (let i = 0; i < n; i++) {
    graph.set(i, [])
  }
  for (const [from, to] of edges) {
    graph.get(from).push(to)
    graph.get(to).push(from)
  }

  const seen = new Array(n).fill(false)
  let ans = 0
  for (let j = 0; j < n; j++) {
    if (!seen[j]) {
      dfs(j)
      ans++
    }
  }

  return ans
}