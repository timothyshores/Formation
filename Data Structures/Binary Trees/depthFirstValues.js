/*

PROMPT

Write a function, depthFirstValues, that takes in the root of a binary tree.The function should return an array containing all values of the tree in depth - first order.

EXPLORE

- Need to handle edge cases like null value passed into the function and single root node being passed into function
- If null value is passed into function return an empty array
- If a single root node is passed in return the value of the root node in an array

BRAINSTORM

Approach 1: Iterative DFS
Time complexity: O(N) to visit N number of nodes in the binary tree
Space complexity: O(H) where H is the maximum height in the binary tree

PLAN

If the root node is null return an empty array
Create an empty stack and push the root node onto the stack
Create an empty array to store the value of the nodes in the order visited

While the stack is not empty

1. Pop the top element from the stack and store in a variable called current node
2. Push the current node's value to the visited array
3. If the current node has a right child, push the right child onto the stack
4. If the current node has a left child, push the left child onto the stack
5. Repeat steps 1 through 4 until the stack is empty

Return the visited array

IMPLEMENT

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const depthFirstValues = (root) => {
	// Handle edge case null input value
	if (!root) return [];

	// Add the root node a stack
	const stack = [root];

	// Store the values of the nodes visited in a visited array
	const visited = [];

	// Continue looping while stack has at least 1 or more elements
	while (stack.length) {
		// Pop off the top element from the store and store in currentNode variable
		const currentNode = stack.pop();
		// Add the currentNode to a set of visited nodes
		visited.push(currentNode.val);
		// If the currentNode has a right child, add it to the stack
		if (currentNode.right) stack.push(currentNode.right);
		// If the currentNode has a left child, add it to the stack
		if (currentNode.left) stack.push(currentNode.left);
	}

	return visited;
};

/*

Verify 

*/

// Test 1
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a1)); // ['a', 'b', 'd', 'e', 'c', 'f']

// Test 2
const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");
const e2 = new Node("e");

a2.right = b2;
b2.left = c2;
c2.right = d2;
d2.right = e2;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

console.log(depthFirstValues(a2)); // ['a', 'b', 'c', 'd', 'e']

// Test 3
console.log(depthFirstValues(new Node("a"))); // ['a']

// Test 4
console.log(depthFirstValues(null)); // []
