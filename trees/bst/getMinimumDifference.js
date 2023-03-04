// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
// If we do an inorder DFS, we can get the nodes in sorted order

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const dfs = (node) => {
  if (!node) return []

  const left = dfs(node.left)
  const right = dfs(node.right)

  return [...left, node, ...right]
}

var getMinimumDifference = function (root) {
  const nodes = dfs(root)

  let ans = Infinity
  for (let i = 0; i < nodes.length - 1; i++) {
    ans = Math.min(ans, Math.abs(nodes[i].val - nodes[i + 1].val))
  }

  return ans
}