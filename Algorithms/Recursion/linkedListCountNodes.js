/*
❓ PROMPT
Given an unsorted linked list, count the number of elements using recursion

Example(s)

console.log(countNodes(null) === 0);
console.log(countNodes(new Node(1)) === 1);
console.log(countNodes(new Node(1, new Node(4, new Node(5)))) === 3);

🔎 EXPLORE
State your assumptions & discoveries:
· Traverse through the give linked list using recursion
· Count the number of nodes in the linked list and return count
· When null is passed into the function return 0

Create examples & test cases:

console.log(countNodes(new Node()) === 1);
console.log(countNodes(new Node(0)) === 1);
console.log(countNodes(new Node(-1)) === 1);
console.log(countNodes(new Node(1, new Node(4))) === 2);
console.log(
	countNodes(new Node(1, new Node(4, new Node(5, new Node(0))))) === 4
);
console.log(
	countNodes(
		new Node(1, new Node(4, new Node(5, new Node(0, new Node(6)))))
	) === 5
);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.

Approach 1: Use recursion without a helper function
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Base case when null value is passed into the function
· Recursive case 
    · When we have a node add one
    · Call the function recursively passing in the next node

🛠️ IMPLEMENT */

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const countNodes = (node) => {};

/* 
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
