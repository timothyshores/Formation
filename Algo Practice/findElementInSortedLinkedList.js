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
