/*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5

             returns 5


🔎 EXPLORE
What are some other insightful & revealing test cases?
countTree(emptyTree); // 0

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative BFS
Time: O(N)
Space: O(N) technically up to number of nodes at the root level divided by 2

Algorithm 2: Iterative DFS
Time: O(N)
Worst Case Space: O(N) if the tree is skewed like a linked list
Best Case Space: O(log n) if the tree is balanced

📆 PLAN
Outline of algorithm #: 1
- Initialize a variable called nodeCount and set it to zero
- Create a variable called queue and set it to an array with the root node
- Create a while loop to run until the queue is empty
    - Initialize a currentNode variable and set it to Array.pop()  to remove the last element from the queue
    - Add +1 to nodeCount
    - If the currentNode has a left child then add the left child to the front of the queue using .unshift()
    - If the currentNode has a right child then add the right child to the front of the queue using .unshift()
- Return nodeCount after the queue is empty and all nodes have been visited

Outline of algorithm #: 2
- Same as outline for algorithm 1 but use a stack instead of a queue

🛠️ IMPLEMENT
Write your algorithm.

🧪 VERIFY
Run tests. Methodically debug & analyze issues.


*/

class TreeNode {
	constructor(value = 0, leftChild = null, rightChild = null) {
		this.value = value;
		this.left = leftChild;
		this.right = rightChild;
	}
}

const countTreeBFS = (root) => {
	let nodeCount = 0;
	if (!root) return nodeCount;
	const queue = [root];

	while (queue.length > 0) {
		const currentNode = queue.pop();
		nodeCount++;
		if (currentNode.left) queue.unshift(currentNode.left);
		if (currentNode.right) queue.unshift(currentNode.right);
	}

	return nodeCount;
};

const countTreeDFS = (root) => {
	let nodeCount = 0;
	if (!root) return nodeCount;
	const stack = [root];

	while (stack.length > 0) {
		const currentNode = stack.pop();
		nodeCount++;
		if (currentNode.left) stack.push(currentNode.left);
		if (currentNode.right) stack.push(currentNode.right);
	}

	return nodeCount;
};

// All Test Cases Return True

// Breadth First Search Test Cases
console.log(countTreeBFS(null) === 0);
console.log(countTreeBFS(new TreeNode()) === 1);
console.log(
	countTreeBFS(new TreeNode(1, new TreeNode(2), new TreeNode(3))) === 3
);
console.log(
	countTreeBFS(
		new TreeNode(
			2,
			new TreeNode(29, new TreeNode(26)),
			new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
		)
	) === 6
);

// Depth First Search Test Cases
console.log(countTreeDFS(null) === 0);
console.log(countTreeDFS(new TreeNode()) === 1);
console.log(
	countTreeDFS(new TreeNode(1, new TreeNode(2), new TreeNode(3))) === 3
);
console.log(
	countTreeDFS(
		new TreeNode(
			2,
			new TreeNode(29, new TreeNode(26)),
			new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
		)
	) === 6
);
