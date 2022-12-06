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

const findMissing = (head) => {};
