// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

/*
  Given a binary tree root, a node X in the tree is named good if in the path
  from root to X there are no nodes with a value greater than X.
*/

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
const dfs = (node, max = -Infinity) => {
  if (!node) return 0

  max = Math.max(max, node.val)
  const left = dfs(node.left, max)
  const right = dfs(node.right, max)

  let ans = left + right

  if (max <= node.val) {
    ans += 1
  }

  return ans
}

var goodNodes = function (root) {
  return dfs(root)
}