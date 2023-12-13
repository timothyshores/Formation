/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree, print level order traversal so that nodes of all levels are printed in several lines

Examples:
• Given a binary tree:
                 1
                / \ 
               2   3
// returns [[1], [2, 3]]

root: 1
root.left : 2
root.right : 3

• Given a binary tree:
                 1
                / \
               2   3
              / \
             4   5

// returns [[1], [2, 3], [4, 5]]

root: 1
root.left : 2
root.right : 3
root.left.left : 4
root.left.right : 4

Want to print the values of each node in the tree by level
Return an array of arrays where each sub array is the value of each node at the current level from left to right
First sub array will be the root node, second subarray will be the root.left and root.right node values, etc.

🔎 EXPLORE
What are some other insightful & revealing test cases?


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative
Time: O(N)
Space: O(N)

Algorithm 1: Recursive
Time: O(N)
Space: O(N)

📆 PLAN
Outline of algorithm #: 1

Create a variable called level and set it equal to zero
Create an array called nodes to visit and add the root 
Initialize an empty array called results to store the value of nodes at a given level

While there are elements in the nodes to visit array
    - Create a variable called currentNode and set it equal to the first element of nodes to visit 
    - If current node has a left node 
        - Add it to the back of the nodes to visit array using .push()
        - Add
    - If current node has a right node 
        - Add it to the back of the nodes to visit array using .push()
    - Add the current nodes value into the results array using the current level to determine the subarray index


🛠️ IMPLEMENT
Write your algorithm.

*/

class TreeNode {
	constructor(value, left, right) {
		value = this.value;
		left = this.left;
		right = this.right;
	}
}

const printLevelOrderTraversal = (root) => {
	const nodesToVisit = [[root, 0]];
	const treeValuesByLevel = [];

	while (nodesToVisit.length > 0) {
		const currentTuple = nodesToVisit.shift();
		const [currentNode, currentLevel] = currentTuple;
		if (currentNode.left) {
			nodesToVisit.push([currentNode.left, currentLevel + 1]);
		}
		if (currentNode.right) {
			nodesToVisit.push([currentNode.left, currentLevel + 1]);
		}
		if (Array.isArray(treeValuesByLevel[currentLevel])) {
			treeValuesByLevel[currentLevel] = [
				...treeValuesByLevel[currentLevel],
				currentNode.value,
			];
		} else {
			treeValuesByLevel[currentLevel] = [currentNode.value];
		}
	}

	return treeValuesByLevel;
};

/*
🧪 VERIFY
Run tests. Methodically debug & analyze issues.
*/

// Test Cases

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(printLevelOrderTraversal(tree1));

// test.testForArrays([[1], [2, 3]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
// test.testForArrays([[2], [29, 4], [26, 2], [9]], printTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 2)
// test.testForArrays([[1], [2, 3], [4, 5]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))), 3)
// test.testForArrays([[-3]], printTree(new TreeNode(-3)), 4)
// test.endProblem()
