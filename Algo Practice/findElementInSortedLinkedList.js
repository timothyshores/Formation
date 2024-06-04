/*

Given a sorted linked list of unique integers, check if the list contains an element with a target value.

Examples:
• Given a linked list: 2 ➞ 3 ➞ 5, target: 2 // returns True
• Given a linked list: 2 ➞ 3 ➞ 5, target: 4  // returns False

*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const iterativeSearch = (head, target) => {
  if (!head) return false;
  let node = head;

  while (node) {
    if (node.value === target) return true;
    if (node.value > target) return false;
    node = node.next;
  }

  return false;
};

const recursiveSearch = (head, target) => {
  if (!head || head.value > target) return false;
  return head.value === target || recursiveSearch(head.next, target);
};

// Helper function to create a linked list from an array of values
const createLinkedList = (values) => {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
};

// Test Data
const LL1 = createLinkedList([1, 2, 3, 5, 6, 7, 10]);
const LL2 = createLinkedList([2, 3, 5]);
const LL3 = createLinkedList([10]);
const LL4 = createLinkedList([-10, -3, 0, 5, 9]);

console.log("Iterative implementation");
console.log(iterativeSearch(null, 1) === false);
console.log(iterativeSearch(LL1, 2) === true);
console.log(iterativeSearch(LL1, 4) === false);
console.log(iterativeSearch(LL1, -1) === false);
console.log(iterativeSearch(LL1, 10) === true);
console.log(iterativeSearch(LL1, 11) === false);
console.log(iterativeSearch(LL2, 3) === true);
console.log(iterativeSearch(LL3, 10) === true);
console.log(iterativeSearch(LL3, -10) === false);
console.log(iterativeSearch(LL4, 0) === true);
console.log();

console.log("Recursive implementation");
console.log(recursiveSearch(null, 1) === false);
console.log(recursiveSearch(LL1, 2) === true);
console.log(recursiveSearch(LL1, 4) === false);
console.log(recursiveSearch(LL1, -1) === false);
console.log(recursiveSearch(LL1, 10) === true);
console.log(recursiveSearch(LL1, 11) === false);
console.log(recursiveSearch(LL2, 3) === true);
console.log(recursiveSearch(LL3, 10) === true);
console.log(recursiveSearch(LL3, -10) === false);
console.log(recursiveSearch(LL4, 0) === true);
