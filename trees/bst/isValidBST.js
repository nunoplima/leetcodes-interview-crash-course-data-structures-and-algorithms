// https://leetcode.com/problems/validate-binary-search-tree/submissions/908984512/

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
 * @return {boolean}
 */
const dfs = (node, small, large) => {
  if (!node) return true
  if (node.val <= small || node.val >= large) return false

  const left = dfs(node.left, small, node.val)
  const right = dfs(node.right, node.val, large)

  return left && right
}

var isValidBST = function (root) {
  return dfs(root, -Infinity, Infinity)
};