// Prompt: Given a linked list and an integer, find whether the integer exists in the list. Return a boolean.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const linkedListContainsValue = (node, int) => {
	if (!node) return false;
	if (node.value == int) return true;
	return linkedListContainsValue(node.next, int);
};

// Test data
const LL5 = new Node(5);
const LL4 = new Node(4, LL5);
const LL3 = new Node(3, LL4);
const LL2 = new Node(2, LL3);
const LL1 = new Node(1, LL2);

// All test cases return true
console.log(linkedListContainsValue(LL1, 1));
console.log(linkedListContainsValue(LL1, 2));
console.log(linkedListContainsValue(LL2, 2));
console.log(linkedListContainsValue(LL3, 3));
console.log(linkedListContainsValue(LL4, 4));
console.log(linkedListContainsValue(LL1, 5));
console.log(linkedListContainsValue(LL5, 5));
console.log(!linkedListContainsValue(LL1, 0));
console.log(!linkedListContainsValue(LL4, 3));
console.log(!linkedListContainsValue(LL5, 4));
console.log(!linkedListContainsValue(LL5, 6));
