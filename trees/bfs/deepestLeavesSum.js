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
var deepestLeavesSum = function (root) {
  let q = [root]
  while (q.length > 0) {
    const nextQ = []
    for (let i = 0; i < q.length; i++) {
      const node = q[i]

      if (node.left) nextQ.push(node.left)
      if (node.right) nextQ.push(node.right)
    }

    if (nextQ.length === 0) {
      let ans = 0
      for (let i = 0; i < q.length; i++) {
        const node = q[i]
        ans += node.val
      }

      return ans
    }

    q = nextQ
  }
}