/*

Write a function called sumAllValues 
sumAllValues receives a head node of a Linked List
sumAllValues returns the sum of all values in a given Linked List

*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const sumAllValues = (head) => {
	if (!head) return 0;

	return head.value + sumAllValues(head.next);
};

// All test cases return true
console.log(sumAllValues() === 0);
console.log(sumAllValues(new Node(1)) === 1);
console.log(sumAllValues(new Node(0)) === 0);
console.log(sumAllValues(new Node(2)) === 2);
console.log(sumAllValues(new Node(-1)) === -1);
console.log(sumAllValues(new Node(100)) === 100);
console.log(sumAllValues(new Node(0, new Node(1))) === 1);
console.log(sumAllValues(new Node(1, new Node(0))) === 1);
console.log(sumAllValues(new Node(1, new Node(1))) === 2);
console.log(sumAllValues(new Node(1, new Node(2))) === 3);
console.log(sumAllValues(new Node(2, new Node(1))) === 3);
console.log(sumAllValues(new Node(-1, new Node(1))) === 0);
console.log(sumAllValues(new Node(-1, new Node(-1))) === -2);
console.log(sumAllValues(new Node(500, new Node(500))) === 1000);
console.log(sumAllValues(new Node(1, new Node(2, new Node(3)))) === 6);
console.log(
	sumAllValues(new Node(1, new Node(2, new Node(3, new Node(4))))) === 10
);
console.log(
	sumAllValues(new Node(-1, new Node(-2, new Node(-3, new Node(-4))))) === -10
);
