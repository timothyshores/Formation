/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary search tree and a target integer, check if the tree contains a target.

Examples:
• Given a binary search tree:
                  8
                /   \
               3     10
              / \      \
             1   6      14
                       /
                     13
• For target: 4 // returns False
• For target: 14 // returns True

*/

class TreeNode {
	constructor(value = 0, leftChild = null, rightChild = null) {
		this.value = value;
		this.left = leftChild;
		this.right = rightChild;
	}
}

const searchBST = (root, target) => {
	// Base case: root is null
	if (!root) return false;

	// Scenario 1: target is equal to the root value
	if (root.value === target) {
		// found target
		return true;
	}

	// Scenario 2: target is less than the root's value
	else if (target < root.value) {
		// search left subtree
		return searchBST(root.left, target);
	}

	// Scenario 3: target is greater than the root's value
	else {
		// search right subtree
		return searchBST(root.right, target);
	}
};

// Test cases BST data
const tree = new TreeNode(
	8,
	new TreeNode(3, new TreeNode(1), new TreeNode(6)),
	new TreeNode(10, null, new TreeNode(14, new TreeNode(13)))
);

// All test cases return true
console.log(searchBST(tree, 1));
console.log(!searchBST(null, 1));
console.log(searchBST(tree, 14));
console.log(!searchBST(tree, 2));
console.log(searchBST(tree, 13));
console.log(searchBST(new TreeNode(), 0));
