/*
❓ PROMPT
Given an unsorted linked list, count the number of elements using recursion

Example(s)

console.log(countNodes(null) === 0);
console.log(countNodes(new Node(1)) === 1);
console.log(countNodes(new Node(1, new Node(4, new Node(5)))) === 3);

🔎 EXPLORE
State your assumptions & discoveries:

Create examples & test cases:

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.

Approach 1: 
Time: 
Space: 

📆 PLAN
High-level outline of approach #: 1

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
