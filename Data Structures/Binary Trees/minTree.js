/*

Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

Brainstorm:

Approach 1: Iterative breadth first search
Time complexity: O(N^2) because unshift of O(N)
Space complexity: O(N)

Approach 2: Recursive depth first search
Time complexity: O(N)
Space complexity: O(N)

Approach 3: Iterative depth first search
Time complexity: O(N)
Space complexity: O(N)

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// Approach 1: Iterative breadth first search
const minTreeIterativeBFS = (root) => {
	let min = Infinity;
	const queue = [root];

	while (queue.length) {
		const node = queue.pop();
		min = Math.min(node.val, min);
		if (node.left) queue.unshift(node.left);
		if (node.right) queue.unshift(node.right);
	}

	return min;
};

// Approach 2: Recursive depth first search
const minTreeRecursiveDFS = (root) => {
	if (root === null) return Infinity;

	const leftSubTreeMin = minTreeRecursiveDFS(root.left);
	const rightSubTreeMin = minTreeRecursiveDFS(root.right);

	return Math.min(root.val, leftSubTreeMin, rightSubTreeMin);
};

// Approach 3: Iterative depth first search
const minTreeIterativeDFS = (root) => {
	let min = Infinity;
	const stack = [root];

	while (stack.length) {
		const node = stack.pop();
		min = Math.min(node.val, min);
		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
	}

	return min;
};

// Test 1
const a1 = new Node(3);
const b1 = new Node(11);
const c1 = new Node(4);
const d1 = new Node(4);
const e1 = new Node(-2);
const f1 = new Node(1);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(minTreeIterativeBFS(a1)); // -2
console.log(minTreeRecursiveDFS(a1)); // -2
console.log(minTreeIterativeDFS(a1)); // -2

// Test 2
const a2 = new Node(5);
const b2 = new Node(11);
const c2 = new Node(3);
const d2 = new Node(4);
const e2 = new Node(14);
const f2 = new Node(12);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(minTreeIterativeBFS(a2)); // 3
console.log(minTreeRecursiveDFS(a2)); // 3
console.log(minTreeIterativeDFS(a2)); // 3

// Test 3
const a3 = new Node(-1);
const b3 = new Node(-6);
const c3 = new Node(-5);
const d3 = new Node(-3);
const e3 = new Node(-4);
const f3 = new Node(-13);
const g3 = new Node(-2);
const h3 = new Node(-2);

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;
e3.left = g3;
f3.right = h3;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

console.log(minTreeIterativeBFS(a3)); // -13
console.log(minTreeRecursiveDFS(a3)); // -13
console.log(minTreeIterativeDFS(a3)); // -13

// Test 4
console.log(minTreeIterativeBFS(new Node(42))); // 42
console.log(minTreeRecursiveDFS(new Node(42))); // 42
console.log(minTreeIterativeDFS(new Node(42))); // 42
