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
const rightSideView = root => {
  if (!root) return []

  const ans = []
  let queue = [root]
  while (queue.length > 0) {
    const nextQueue = []
    ans.push(queue[queue.length - 1].val)

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i]

      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }

    queue = nextQueue
  }

  return ans
}