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
If there's no root node return 0
If there's only a root node and no children return the value of the root node
If there's a root with a left and right child return the value of all 3 nodes

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative while loop with a queue
Time: O(N)
Space: O(N) 

📆 PLAN
Outline of algorithm #: 1

Initialize a sum variable and set to 0
Create a queue and add the root node to the queue
Iterate through the queue using a while loop
Continue the while loop when queue has 1 or more elements
Call .pop() on the queue and set this as current value

Return value of sum

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

	let sum = 0;
	const nodesToVisit = [root];

	while (nodesToVisit.length) {
		const currentNode = nodesToVisit.pop();
		sum += currentNode.value;
		if (currentNode.left) nodesToVisit.unshift(currentNode.left);
		if (currentNode.right) nodesToVisit.unshift(currentNode.right);
	}

	return sum;
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
