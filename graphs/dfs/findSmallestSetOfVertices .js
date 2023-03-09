// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const indegrees = new Array(n).fill(0)

  for (const [_, to] of edges) {
    indegrees[to] += 1
  }

  const ans = []
  for (let node = 0; node < indegrees.length; node++) {
    if (indegrees[node] === 0) ans.push(node)
  }

  return ans
}