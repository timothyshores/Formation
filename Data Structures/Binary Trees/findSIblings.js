/*

Find Siblings

We're given a tree, and we want to find all of the nodes in the tree that have siblings (other nodes under their parent).

Return an array of nodes representing each sibling in any order. No only children can be in your result array.

EXAMPLE(S)
      1
  2      3
_  4   _  _

should return [2, 3]

     12
  3      4
1  _   6  _

should return [3, 4]

        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]
 
BRAINSTORM:
- Use BFS
- If a node has both a left AND right child then they are siblings

APPROACHES
- Approach 1: Iterative BFS
  Time Complexity: O(N)
  Space Complexity: O(N)

Approach 2: Recursive DFS
  Time Complexity: O(N)
  Space Complexity: O(H) or O(D) where H or D is the maximum height of the tree

PLAN:
  Use iterative BFS
  Create an array to store sibling nodes
  If node has a left AND right child then add node value's to the sibling nodes array

FUNCTION SIGNATURE
function findSiblingNodes(root) {
'''
*/

function findSiblingNodes(root) {
	// if node has both left and right, add then add both left and right to result array
	// return result array
	const results = [];

	const queue = [root];

	// while queue.length
	// if left & right child are not null
	// if root.left push to queue
	// if root.right push to queue
	// if leaf node case ?

	while (queue.length) {
		const curr = queue.shift();
		if (curr.left && curr.right) {
			results.push(curr.left.value);
			results.push(curr.right.value);
		}
		if (curr.left) {
			queue.push(curr.left);
		}
		if (curr.right) {
			queue.push(curr.right);
		}
	}

	return results;
}

const findSiblingsDFS = (root) => {
	// if !root return empty array
	if (!root) return [];

	// if there's valid left and right child nodes then add to results array
	if (root.left && root.right) {
		findSiblingsDFS(root.left);
		findSiblingsDFS(root.right);
		return [root.left.value, root.right.value];
	}

	// call function recursively on left and right child nodes
	if (root.left) return findSiblingsDFS(root.left);

	if (root.right) return findSiblingsDFS(root.right);
};

// Solution
function findSiblingNodes(root) {
	let result = [];

	function dfs(node) {
		if (!node) return;

		if (node.left && node.right) {
			result.push(node.left);
			result.push(node.right);
		}

		dfs(node.left);
		dfs(node.right);
	}

	dfs(root);
	return result;
}

class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

console.log(findSiblingsDFS(null));

/*

EXAMPLE 1
      1
  2      3
_  4   _  _

should return [2, 3]

*/

const tree1 = new TreeNode(
	1,
	new TreeNode(2, null, new TreeNode(4)),
	new TreeNode(3)
);
const tree3 = new TreeNode(
	12,
	new TreeNode(3, new TreeNode(1), null),
	new TreeNode(4, new TreeNode(6))
);

// console.log(findSiblingNodes(tree1));

console.log(findSiblingsDFS(tree1));

/*

EXAMPLE 2

     12
  3      4
1  _   6  _

should return [3, 4]

*/

const rootleft = new TreeNode(3, new TreeNode(1), null);
const rootright = new TreeNode(4, new TreeNode(6), null);
const ex2root = new TreeNode(12, rootleft, rootright);

// console.log(findSiblingNodes(ex2root));
console.log(findSiblingsDFS(ex2root));

/*
        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]
 
*/

const ex3rootleftleft = new TreeNode(1, new TreeNode(9), new TreeNode(7));
const ex3rootleft = new TreeNode(3, new TreeNode(1), null);
const ex3rootright = new TreeNode(4, new TreeNode(6), null);
const ex3root = new TreeNode(12, rootleft, rootright);

console.log(findSiblingsDFS(ex3root));
