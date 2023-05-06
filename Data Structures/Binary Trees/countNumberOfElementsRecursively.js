/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5

console.log(countTree(rootNode 1)); // 5

*/

class TreeNode {
	constructor(value = 0, leftChild = null, rightChild = null) {
		this.value = value;
		this.left = leftChild;
		this.right = rightChild;
	}
}

const countTree = (root) => {
	if (!root) return 0;
	return 1 + countTree(root.left) + countTree(root.right);
};

// Test Cases
console.log(countTree(null)); // 0
console.log(countTree(new TreeNode())); // 1
console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 3
console.log(
	countTree(
		new TreeNode(
			2,
			new TreeNode(29, new TreeNode(26)),
			new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
		)
	)
); // 6
