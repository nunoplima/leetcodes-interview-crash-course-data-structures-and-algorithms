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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []

  let q = [root]
  let ans = []
  let ltr = true
  while (q.length > 0) {
    const nextQ = []
    const currLevel = new Array(q.length)
    const offset = ltr ? 0 : q.length - 1

    for (let i = 0; i < q.length; i++) {
      const node = q[i]

      currLevel[Math.abs(offset - i)] = node.val

      if (node.left) nextQ.push(node.left)
      if (node.right) nextQ.push(node.right)
    }

    ans.push(currLevel)
    ltr = !ltr
    q = nextQ
  }

  return ans
};