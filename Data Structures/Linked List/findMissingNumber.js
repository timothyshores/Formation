// Given a linked list of sequential, ascending numbers, return the first missing value or the next value that should be in the list. For any node, the next value could be 1 or 2 greater than the current node's value. Note that the list doesn't necessarily begin at 1.

// Expected Time Complexity: O(N) to iterate through the length N list
// Expected Space Complexity: O(1) to store a constant number of variables

// Examples
// let head1 = new Node(1, new Node(3))
// let head2 = new Node(-3, new Node(-1))
// let head3 = new Node(5, new Node(6, new Node(7, new Node(8, new Node(9)))))
// let head4 = new Node(5, new Node(6, new Node(7, new Node(8, new Node(10)))))
// console.table([
//   findMissing(head1) == 2,
//   findMissing(head2) == -2,
//   findMissing(head3) == 10,
//   findMissing(head4) == 9
// ])

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findMissing = (head) => {
	if (!head.value) return 1;
	let min = Infinity;
	let max = -Infinity;
	let set = new Set();

	// iterate through the linked list
	while (head) {
		// get the min
		min = Math.min(head.value, min);
		// get the max
		max = Math.max(head.value, max);

		// Store the current node's value in a set
		set.add(head.value);
		head = head.next;
	}

	// iterate starting at min, min + 1, min + 2, ..., max
	for (let i = min; i <= max; i++) {
		if (set.has(i)) {
			set.delete(i);
		} else if (!set.has(i)) {
			return i;
		}
	}

	return max + 1;
};

// empty list
console.log(findMissing(new Node()) === 1); // true

// 1-node list
console.log(findMissing(new Node(0)) === 1); // true
console.log(findMissing(new Node(1)) === 2); // true
console.log(findMissing(new Node(-1)) === 0); // true
console.log(findMissing(new Node(999)) === 1000); // true

// list with all consecutive numbers
console.log(findMissing(new Node(1, new Node(2))) === 3); // true
console.log(findMissing(new Node(-2, new Node(-1))) === 0); // true
console.log(findMissing(new Node(1, new Node(2, new Node(3)))) === 4); // true
console.log(findMissing(new Node(0, new Node(1, new Node(2)))) === 3); // true

// list skipping a number
console.log(findMissing(new Node(1, new Node(3))) === 2); // true
console.log(findMissing(new Node(2, new Node(4))) === 3); // true
console.log(findMissing(new Node(-1, new Node(1))) === 0); // true
console.log(findMissing(new Node(-3, new Node(-1))) === -2); // true

// list skipping a number on the second-to-last node
console.log(findMissing(new Node(1, new Node(2, new Node(4)))) === 3); // true
console.log(findMissing(new Node(-2, new Node(-1, new Node(1)))) === 0); // true
console.log(findMissing(new Node(-4, new Node(-3, new Node(-1)))) === -2); // true

// list skipping a number on the second node
console.log(findMissing(new Node(1, new Node(3, new Node(4)))) === 2); // true
console.log(findMissing(new Node(-2, new Node(0, new Node(1)))) === -1); // true
console.log(findMissing(new Node(-4, new Node(-2, new Node(-1)))) === -3); // true

// list with five nodes
console.log(
	findMissing(
		new Node(5, new Node(6, new Node(7, new Node(8, new Node(9)))))
	) === 10
); // true

console.log(
	findMissing(
		new Node(5, new Node(6, new Node(7, new Node(8, new Node(10)))))
	) === 9
); // true
