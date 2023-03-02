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
const dfs = (node, min, max) => {
  if (!node) return max - min

  const currMin = Math.min(node.val, min)
  const currMax = Math.max(node.val, max)

  const leftAns = dfs(node.left, currMin, currMax)
  const rightAns = dfs(node.right, currMin, currMax)

  return Math.max(leftAns, rightAns)
}

var maxAncestorDiff = function(root) {
  return dfs(root, root.val, root.val)
}