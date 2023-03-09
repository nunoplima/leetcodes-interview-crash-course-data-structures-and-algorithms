/**
* @param {number} n
* @param {number[][]} connections
* @return {number}
*/
var minReorder = function (n, connections) {
  const dfs = node => {
    let ans = 0
    for (let neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        if (roads.has(`${node}-${neighbor}`)) {
          ans++
        }
        seen[neighbor] = true
        ans += dfs(neighbor)
      }
    }

    return ans
  }

  const roads = new Set()
  const graph = new Map()
  for (let i = 0; i < n; i++) {
    graph.set(i, [])
  }

  for (let [from, to] of connections) {
    graph.get(from).push(to)
    graph.get(to).push(from)
    roads.add(`${from}-${to}`)
  }

  const seen = new Array(n).fill(false)
  seen[0] = true

  return dfs(0)
}