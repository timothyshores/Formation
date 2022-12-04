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

// empty list
console.log(toString(everyKthNode(new Node(), 3)) === "<empty>"); // true

// 1 node list with target == 1
console.log(toString(everyKthNode(new Node(0), 1)) === "0"); // true
console.log(toString(everyKthNode(new Node(1), 1)) === "1"); // true
console.log(toString(everyKthNode(new Node(-1), 1)) === "-1"); // true

// 1 node list with target > 1
console.log(toString(everyKthNode(new Node(1), 2)) === "<empty>"); // true
console.log(toString(everyKthNode(new Node(1), 3)) === "<empty>"); // true
console.log(toString(everyKthNode(new Node(1), 4)) === "<empty>"); // true
console.log(toString(everyKthNode(new Node(1), 100)) === "<empty>"); // true

// 2 node list with target == 1
console.log(toString(everyKthNode(new Node(1, new Node(2)), 1)) === "1 -> 2"); // true
console.log(
	toString(everyKthNode(new Node(10, new Node(100)), 1)) === "10 -> 100"
); // true

// 2 node list with target == 2
console.log(toString(everyKthNode(new Node(1, new Node(2)), 2)) === "2"); // true
console.log(toString(everyKthNode(new Node(10, new Node(100)), 2)) === "100"); // true

// 2 node list with target > 2
console.log(toString(everyKthNode(new Node(1, new Node(2)), 3)) === "<empty>"); // true
console.log(toString(everyKthNode(new Node(1, new Node(2)), 4)) === "<empty>"); // true
console.log(toString(everyKthNode(new Node(1, new Node(2)), 5)) === "<empty>"); // true
console.log(
	toString(everyKthNode(new Node(1, new Node(2)), 100)) === "<empty>"
); // true

// list with multiple nodes and is divisible by target
let oneToFour = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(toString(everyKthNode(oneToFour, 2)) === "2 -> 4"); // true

let oneToSix = new Node(
	1,
	new Node(2, new Node(3, new Node(4, new Node(5, new Node(6)))))
);
console.log(toString(everyKthNode(oneToSix, 3)) === "3 -> 6"); // true

// list with multiple nodes and is not divisible by target (there is remainder)
console.log(toString(everyKthNode(oneToFour, 5)) === "<empty>"); // true
console.log(toString(everyKthNode(oneToFour, 6)) === "<empty>"); // true
console.log(toString(everyKthNode(oneToSix, 7)) === "<empty>"); // true
console.log(toString(everyKthNode(oneToSix, 8)) === "<empty>"); // true
console.log(toString(everyKthNode(oneToSix, 9)) === "<empty>"); // true
console.log(toString(everyKthNode(oneToSix, 10)) === "<empty>"); // true
