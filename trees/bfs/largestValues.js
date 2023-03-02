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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return []

  let q = [root]
  const ans = []

  while (q.length > 0) {
    const nextQ = []
    let max = -Infinity

    for (let i = 0; i < q.length; i++) {
      const node = q[i]
      max = Math.max(max, node.val)
      if (node.left) nextQ.push(node.left)
      if (node.right) nextQ.push(node.right)
    }

    ans.push(max)
    q = nextQ
  }

  return ans
};