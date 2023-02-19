// PROMPT: Given the head of a linked list of nodes containing integers.
// Write a function called sumList the returns the sum of all nodes in the Linked List using recursion
// The function should return 0 is the value of the head node is null

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const sumList = (head) => {
	return !head ? 0 : head.value + sumList(head.next);
};

// All test cases retrun true
console.log(sumList(new Node(0)) === 0);
console.log(sumList(new Node(1)) === 1);
console.log(sumList(new Node(-1)) === -1);
console.log(sumList(new Node(null)) === 0);
console.log(sumList(new Node(1, new Node(1))) === 2);
console.log(sumList(new Node(1, new Node(2))) === 3);
console.log(sumList(new Node(2, new Node(1))) === 3);
console.log(sumList(new Node(2, new Node(2))) === 4);
console.log(sumList(new Node(1, new Node(-1))) === 0);
console.log(sumList(new Node(1, new Node(2, new Node(3)))) === 6);
console.log(sumList(new Node(3, new Node(2, new Node(1)))) === 6);
console.log(sumList(new Node(3, new Node(1, new Node(2)))) === 6);
console.log(
	sumList(
		new Node(5, new Node(10, new Node(15, new Node(22, new Node(20)))))
	) === 72
);
