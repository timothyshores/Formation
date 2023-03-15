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

const treeMinValue = (root) => {};