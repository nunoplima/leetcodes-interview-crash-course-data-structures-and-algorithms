class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const printList = head => {
  let ans = []
  let curr = head
  while (curr) {
    ans.push(curr.val)
    curr = curr.next
  }

  console.log(ans.join(' -> ') + ' -> null')
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  let curr = head
  let prev = null

  while(curr && curr.next) {
    if (curr == head) {
      head = curr.next
    }

    if (prev) {
      prev.next = curr.next
    }

    const tempNext = curr.next.next
    curr.next.next = curr
    curr.next = tempNext

    prev = curr
    curr = curr.next
  }

  return head
}

const head1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
head1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

console.log(printList(head1)) // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
const newHead = swapPairs(head1)
console.log(printList(newHead)) // 2 -> 1 -> 4 -> 3 -> 6 -> 5 -> null