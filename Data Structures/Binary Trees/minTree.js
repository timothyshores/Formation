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
