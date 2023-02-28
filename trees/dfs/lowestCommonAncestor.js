/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const dfs = (node, p, q) => {
  if (!node) return null
  if (node === p || node === q) return node

  const left = dfs(node.left, p, q)
  const right = dfs(node.right, p, q)

  if (left && right) return node
  if (left) return left
  return right
}

var lowestCommonAncestor = function(root, p, q) {
  return dfs(root, p, q)
}