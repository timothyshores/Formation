// Given a linked list, return the second to last element's value.

// Expected Time Complexity: O(N) to iterate through the length N list
// Expected Space Complexity: O(1) to store a constant number of variables

// Example 1
// 1 -> 2 => 1

// Example 2
// 1 -> 2 -> 3 -> 4 => 3

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const secondToLast = (head) => {
	let current = head;
	if (!current.next) return null;

	while (current) {
		if (current.next.next == null) return current.value;
		current = current.next;
	}
};

// empty list
console.log(secondToLast(new Node()));

// 1-node list
console.log(secondToLast(new Node(1)) === null);
console.log(secondToLast(new Node(0)) === null);
console.log(secondToLast(new Node(-1)) === null);

// 2-node list
console.log(secondToLast(new Node(1, new Node(2))) === 1); // true
console.log(secondToLast(new Node(-1, new Node(1))) === -1); // true

// odd-length list
console.log(secondToLast(new Node(1, new Node(2, new Node(3)))) === 2); // true

console.log(
	secondToLast(
		new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
	) === 4
); // true

// even-length list
console.log(
	secondToLast(new Node(1, new Node(2, new Node(3, new Node(4))))) === 3
); // true
