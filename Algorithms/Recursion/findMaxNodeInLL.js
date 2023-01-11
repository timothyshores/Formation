// Return the max value in a Linked List using recursion and no iterative loops

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findMaxNodeValue = (head) => {
	if (!head) return -Infinity;

	return Math.max(head.value, findMaxNodeValue(head.next));
};

