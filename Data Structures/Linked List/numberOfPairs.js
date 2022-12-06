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
