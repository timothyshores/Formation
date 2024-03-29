/*

❓ PROMPT

Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 5

🔎 EXPLORE
What are some other insightful & revealing test cases?
Want to count all elements in the binary tree
If the tree is empty return 0
If the tree is a root node with no child return 1

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N)
Space: O(1)

📆 PLAN
Outline of algorithm #: 
If the tree is empty i.e. there's no root return 0
Return 1 if the root TreeNode is NOT null and recursively call the function on the left and right child nodes

🛠️ IMPLEMENT
Write your algorithm.

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

/* 

🧪 VERIFY
Run tests. Methodically debug & analyze issues 

*/

// Test Data
const treeThreeNodes = new TreeNode(1, new TreeNode(2), new TreeNode(3));

const treeSixNodes = new TreeNode(
	2,
	new TreeNode(29, new TreeNode(26)),
	new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
);

// All test cases return true
console.log(countTree(null) === 0);
console.log(countTree(new TreeNode()) === 1);
console.log(countTree(treeThreeNodes) === 3);
console.log(countTree(treeSixNodes) === 6);
