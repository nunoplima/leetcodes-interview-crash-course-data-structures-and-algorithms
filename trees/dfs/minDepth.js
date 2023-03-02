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
const dfs = node => {
  if (!node) return Infinity
  if (!node.right && !node.left) return 1

  const left = dfs(node.left)
  const right = dfs(node.right)

  return Math.min(left, right) + 1
}

var minDepth = function(root) {
  if (!root) return 0
  return dfs(root)
}