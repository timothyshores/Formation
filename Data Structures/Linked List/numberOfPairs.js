// Prompt
// Given a linked list, return the number of values that occurred exactly twice.

// Time: O(N) to iterate through the length N list
// Space O(N) to count N nodes and their frequencies

// Examples
// // 1 -> 2 -> 2 -> 3 -> 3 -> 3
// let head1 = new Node(1, new Node(2, new Node(2, new Node(3, new Node(3, new Node(3))))))

// console.log(numPairs(head1) == 1)

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const numPairs = (head) => {
	let current = head;

	if (!current) return 0;

	let counter = {};

	while (current) {
		counter[current.value] = (counter[current.value] || 0) + 1;
		current = current.next;
	}

	return Object.values(counter).filter((value) => value === 2).length;
};

// empty list
console.log(numPairs());

// 1 node list
console.log(numPairs(new Node(1)) === 0); // true

// 2 node list with unique values
console.log(numPairs(new Node(1, new Node(2))) === 0); // true

// 2 node list with the same value
console.log(numPairs(new Node(1, new Node(1))) === 1); // true

// list with a pair
console.log(numPairs(new Node(1, new Node(1, new Node(0)))) === 1); // true
console.log(numPairs(new Node(0, new Node(1, new Node(1)))) === 1); // true
console.log(numPairs(new Node(1, new Node(0, new Node(1)))) === 1); // true

// list with multiple pairs
console.log(numPairs(new Node(0, new Node(0, new Node(1, new Node(1))))) === 2); // true

console.log(
	numPairs(new Node(-1, new Node(-1, new Node(1, new Node(1))))) === 2
); // true

console.log(
	numPairs(new Node(-1, new Node(1, new Node(1, new Node(-1))))) === 2
); // true

// list with multiple duplicates
console.log(numPairs(new Node(1, new Node(2, new Node(3)))) === 0); // true
console.log(numPairs(new Node(1, new Node(1, new Node(1)))) === 0); // true

// list with pairs and multiple duplicates
console.log(numPairs(new Node(1, new Node(1, new Node(2, new Node(3))))) === 1); // true
console.log(numPairs(new Node(1, new Node(2, new Node(3, new Node(1))))) === 1); // true

// list with a number that appears 3 times
console.log(numPairs(new Node(1, new Node(1, new Node(1)))) === 0); // true
console.log(numPairs(new Node(0, new Node(0, new Node(0)))) === 0); // true
console.log(numPairs(new Node(-1, new Node(-1, new Node(-1)))) === 0); // true

// list with a number that appears more than twice and the frequency is divisible by two
console.log(numPairs(new Node(1, new Node(1, new Node(1, new Node(1))))) === 0); // true
