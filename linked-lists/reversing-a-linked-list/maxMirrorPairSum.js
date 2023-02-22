/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = head => {
  // get mid
  let slow = head
  let fast = head
  let firstHalfTail = null

  while (fast && fast.next) {
      firstHalfTail = slow
      fast = fast.next.next
      slow = slow.next
  }

  // reverse second half of ll
  let curr = slow
  let prev = null
  while (curr) {
      const tempNext = curr.next
      curr.next = prev
      prev = curr
      curr = tempNext
  }

  // connect halfs
  firstHalfTail.next = prev

  // iterate and compare i to i + n/2
  let ans = -Infinity
  let firstCurr = head
  let secondCurr = prev
  while (secondCurr) {
      ans = Math.max(ans, firstCurr.val + secondCurr.val)
      firstCurr = firstCurr.next
      secondCurr = secondCurr.next
  }

  return ans
}
