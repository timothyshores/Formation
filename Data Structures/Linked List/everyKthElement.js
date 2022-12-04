// Prompt
// Given a linked list and a target k, return a linked list containing every kth element in the list.

// Expected Time Complexity: O(N) to iterate through the length N list
// Expected Space Complexity: O(k) to store k nodes in the new list

// Examples
// # 1 -> 3 -> 6 -> 2 -> 8 -> 9
// head = Node(1, Node(3, Node(6, Node(2, Node(8, Node(9))))))
// print(toString(everyKthNode(head, 3)) == "6 -> 9")

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function toString(head) {
	if (!head) return "<empty>";

	let parts = [];
	while (head) {
		parts.push(head.val);
		head = head.next;
	}

	return parts.join(" -> ");
}

const everyKthNode = (node, target) => {};
