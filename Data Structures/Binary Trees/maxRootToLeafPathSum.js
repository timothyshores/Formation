/*

PROMPT

Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

You may assume that the input tree is non-empty.

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const maxPathSum = (root) => {
	if (!root) return -Infinity;
	if (!root.left && !root.right) return root.val;
	return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
