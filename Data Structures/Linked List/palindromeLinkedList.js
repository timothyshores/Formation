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

const createPalindromeLL = (array) => {};
