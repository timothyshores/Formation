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

const everyKthNode = (node, target) => {
	let beforeHead = new Node(null);
	let returnNode = beforeHead;
	let inputNode = node;
	let index = 1;

	// iterate through the linked list
	while (inputNode) {
		// check if we're at a multiple of K
		if (index % target === 0) {
			// create new node and add to our linked list
			let newNode = new Node(inputNode.val, null);
			returnNode.next = newNode;
			returnNode = newNode;
		}
		// iterate to the next node
		inputNode = inputNode.next;
		// increment index++
		index++;
	}

	return beforeHead.next;
};
