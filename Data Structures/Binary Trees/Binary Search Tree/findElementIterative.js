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
	let current = root;

	while (current) {
		if (current.value === target) {
			return true;
		} else if (target < current.value) {
			current = current.left;
		} else {
			current = current.right;
		}
	}

	return false;
};

