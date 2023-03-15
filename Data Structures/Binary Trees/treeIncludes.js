/*

PROMPT

Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// Recursive DFS Implementation
const treeIncludes = (root, target) => {
	if (!root) return false;
	if (root.val === target) return true;

	return (
		treeIncludesDFS(root.left, target) || treeIncludesDFS(root.right, target)
	);
};
