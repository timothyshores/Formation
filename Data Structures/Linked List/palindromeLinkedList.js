// Prompt
// Given an array, create a palindrome linked list by iterating through the array forwards and backwards. The last element should not be repeated.

// Expected Time Complexity: O(N) to iterate through the length N array twice
// Expected Space Complexity: O(N) to store almost twice the array of length N

// Examples
// console.log(toString(createPalindromeLL([99])) === "99")
// console.log(toString(createPalindromeLL([1,4,5]))
//   === "1 -> 4 -> 5 -> 4 -> 1")

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function toString(head) {
	if (!head) return null;

	let parts = [];
	while (head) {
		parts.push(head.val);
		head = head.next;
	}

	return parts.join(" -> ");
}

const createPalindromeLL = (array) => {
	if (array.length === 0) return null;

	let headNode = new Node(array[0]);
	let current = headNode;
	let newNode;

	for (let i = 1; i < array.length; i++) {
		newNode = new Node(array[i]);
		current.next = newNode;
		current = newNode;
	}

	for (let j = array.length - 2; j >= 0; j--) {
		newNode = new Node(array[j]);
		current.next = newNode;
		current = newNode;
	}

	return headNode;
};

console.log(toString(createPalindromeLL([99])) === "99"); // true
console.log(
	toString(createPalindromeLL([1, 4, 5])) === "1 -> 4 -> 5 -> 4 -> 1"
); // true

// empty array
console.log(toString(createPalindromeLL([])) === null); // true

// 1 element array
console.log(toString(createPalindromeLL([1])) === "1"); // true

// odd-length array
console.log(
	toString(createPalindromeLL([1, 2, 3])) === "1 -> 2 -> 3 -> 2 -> 1"
); // true

// even-length array
console.log(toString(createPalindromeLL([1, 2])) === "1 -> 2 -> 1"); // true
console.log(
	toString(createPalindromeLL([1, 2, 3, 4])) ===
		"1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1"
); // true

// array with duplicates
console.log(toString(createPalindromeLL([1, 1])) === "1 -> 1 -> 1"); // true

// palindrome array
console.log(
	toString(createPalindromeLL([1, 2, 1])) === "1 -> 2 -> 1 -> 2 -> 1"
); // true
