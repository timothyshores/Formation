/*

❓ PROMPT

Given a binary tree, sum all elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 20


🔎 EXPLORE
What are some other insightful & revealing test cases?
Want to return the sum of all node values given the root of a binary tree

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N)
Space: O(N)

📆 PLAN
Outline of algorithm #: 1
If there's no root node return 0
Return the value of the root node plus recursively call the function on the left and right children

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

const sumBT = (root) => {
	if (!root) return 0;
	return root.value + sumBT(root.left) + sumBT(root.right);
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// All Test Cases Return True
console.log(sumBT(null) === 0);
console.log(sumBT(new TreeNode(1)) === 1);
console.log(sumBT(new TreeNode(1, new TreeNode(2), new TreeNode(3))) === 6);

const sixNodeBinaryTree = new TreeNode(
	2,
	new TreeNode(29, new TreeNode(26)),
	new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
);

console.log(sumBT(sixNodeBinaryTree) === 72);
