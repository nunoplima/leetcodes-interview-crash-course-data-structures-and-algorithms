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
 * @param {number} targetSum
 * @return {boolean}
 */
const dfs = (node, targetSum, sum = 0) => {
  if (!node) return false
  if (!node.left && !node.right) return sum + node.val === targetSum

  sum += node.val
  const left = dfs(node.left, targetSum, sum)
  const right = dfs(node.right, targetSum, sum)

  return left || right
}

var hasPathSum = function(root, targetSum) {
  return dfs(root, targetSum)
};