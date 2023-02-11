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

const reverseList = head => {
  let prev = null
  let curr = head

  while(curr) {
    const tempNext = curr.next
    curr.next = prev
    prev = curr
    curr = tempNext
  }

  return prev
}

const head1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
head1.next = node2
node2.next = node3
node3.next = node4

console.log(printList(head1))
reverseList(head1)
console.log(printList(node4))