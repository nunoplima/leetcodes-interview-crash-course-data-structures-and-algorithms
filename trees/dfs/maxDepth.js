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
var maxDepthRec = function(root) {
  if (root === null) return 0

  const leftHeight = maxDepth(root.left)
  const rightHeight = maxDepth(root.right)

  return Math.max(leftHeight, rightHeight) + 1
}

var maxDepthIter = function(root) {
  if (root === null) return 0

  const stack = [[root, 1]]
  let ans = 1
  while (stack.length > 0) {
      const [node, depth] = stack.pop()
      ans = Math.max(ans, depth)

      if (node.right) stack.push([node.right, depth + 1])
      if (node.left) stack.push([node.left, depth + 1])
  }

  return ans
}