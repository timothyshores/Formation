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

const countOdds = (head) => {};
