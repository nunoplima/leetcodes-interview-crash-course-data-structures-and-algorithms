// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const dfs = node => {
    if (node === destination) {
      return true
    }

    for (const neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        seen[neighbor] = true
        if (dfs(neighbor)) {
          return true
        }
      }
    }

    return false
  }

  const seen = new Array(n).fill(false)
  const graph = new Map()
  for (let i = 0; i < n; i++) {
    graph.set(i, [])
  }

  for (const [from, to] of edges) {
    graph.get(from).push(to)
    graph.get(to).push(from)
  }

  seen[source] = true
  return dfs(source)
}