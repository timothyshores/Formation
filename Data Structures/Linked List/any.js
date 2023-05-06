/*

PROMPT

Write a function called any that takes in the head node of a singly linked list and a test function
    If any node in the singly linked list meets the condition of the test function the return true
    If all nodes in the singly linked list do NOT meet the condition of the test function then return false

Example test functions include
    isEven which returns true if the value of a node is even
    squareRootIsInteger returns true when the square root of a value of a node is an integer e.g. 4, 9, 16, 25, 36, etc.

*/

const any = (head, test) => {
	if (!head) return false;
	return test(head.val) ? test(head.val) : any(head.next, test);
};

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

// Test functions
const isEven = (num) => num % 2 === 0;
const squareRootIsInteger = (num) => Number.isInteger(Math.sqrt(num));

// All test cases return true

console.log(any(new Node(2), isEven));
console.log(any(new Node(2, new Node(3)), isEven));
console.log(any(new Node(2, new Node(4)), isEven));
console.log(any(new Node(3, new Node(4)), isEven));
console.log(any(new Node(2, new Node(4, new Node(6))), isEven));

console.log(!any(null, isEven));
console.log(!any(new Node(1), isEven));
console.log(!any(new Node(1, new Node(3)), isEven));

console.log(squareRootIsInteger(1));
console.log(squareRootIsInteger(4));

console.log(!squareRootIsInteger(2));
console.log(!squareRootIsInteger(3));

console.log(any(new Node(0), squareRootIsInteger));
console.log(any(new Node(1), squareRootIsInteger));
console.log(any(new Node(4), squareRootIsInteger));
console.log(any(new Node(3, new Node(4)), squareRootIsInteger));
console.log(any(new Node(4, new Node(9)), squareRootIsInteger));

console.log(!any(new Node(2), squareRootIsInteger));
console.log(!any(new Node(3), squareRootIsInteger));
console.log(!any(new Node(5, new Node(6)), squareRootIsInteger));
console.log(!any(new Node(5, new Node(6, new Node(7))), squareRootIsInteger));
