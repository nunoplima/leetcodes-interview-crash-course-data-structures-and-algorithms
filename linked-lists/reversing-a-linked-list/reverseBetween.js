/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) =>{
  let curr = head
  let prev = null
  for (let i = 1; i < left; i++) {
    prev = curr
    curr = curr.next
  }

  const mainLeft = prev
  const innerRight = curr

  for (let j = left; j <= right; j++) {
    let tempNext = curr.next
    curr.next = prev
    prev = curr
    curr = tempNext
  }

  const mainRight = curr
  const innerLeft = prev

  if (mainLeft) mainLeft.next = innerLeft // args ([3, 4], 1, 2) wont result in a mainLeft
  else head = innerLeft // so we'll need to set the head to the leftmost node

  innerRight.next = mainRight

  return head
}