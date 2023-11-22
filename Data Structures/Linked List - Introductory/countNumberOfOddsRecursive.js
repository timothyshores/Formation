// Prompt
// Given a linked list of positive integers, count the elements with odd values from the list. Note that 0 is an even number.

// Expected Time Complexity: O(N) to iterate through the length N list
// Expected Space Complexity: O(N) to store N call frames on the stack

// Example1
// // 1 -> 1 -> 1 -> 1
// head = new Node(1, new Node(1, new Node(1, new Node(1))))
// console.log(countOdd(head) == 4)

// Example 2
// // 1 -> 2 -> 3 -> 4
// head = new Node(1, new Node(2, new Node(3, new Node(4))))
// console.log(countOdd(head) == 2)

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const countOdds = (head) => {
	if (!head) return 0;

	if (head.next === null) {
		return head.value % 2 === 1 ? 1 : 0;
	} else {
		return (head.value % 2 === 1 ? 1 : 0) + countOdds(head.next);
	}
};

// empty list
console.log(countOdds() === 0); // true
console.log(countOdds(new Node()) === 0); // true

// 1 node list with an odd value
console.log(countOdds(new Node(1)) === 1); // true
console.log(countOdds(new Node(3)) === 1); // true
console.log(countOdds(new Node(5)) === 1); // true
console.log(countOdds(new Node(101)) === 1); // true

// 1 node list without an odd value
console.log(countOdds(new Node(0)) === 0); // true
console.log(countOdds(new Node(2)) === 0); // true
console.log(countOdds(new Node(4)) === 0); // true
console.log(countOdds(new Node(8)) === 0); // true

// list with some odd values
console.log(countOdds(new Node(1, new Node(1))) === 2);
console.log(countOdds(new Node(0, new Node(1, new Node(1)))) === 2); // true
console.log(countOdds(new Node(1, new Node(0, new Node(1)))) === 2); // true
console.log(countOdds(new Node(1, new Node(1, new Node(0)))) === 2); // true
console.log(countOdds(new Node(1, new Node(1, new Node(1)))) === 3); // true
console.log(
	countOdds(new Node(1, new Node(1, new Node(1, new Node(1))))) === 4
); // true

// list with no odd values
console.log(countOdds(new Node(0, new Node(0))) === 0); // true
console.log(countOdds(new Node(2, new Node(2))) === 0); // true
console.log(countOdds(new Node(2, new Node(4))) === 0); // true
console.log(countOdds(new Node(2, new Node(2, new Node(2)))) === 0); // true
console.log(countOdds(new Node(2, new Node(4, new Node(6)))) === 0); // true
console.log(
	countOdds(new Node(2, new Node(4, new Node(6), new Node(8)))) === 0
); // true
