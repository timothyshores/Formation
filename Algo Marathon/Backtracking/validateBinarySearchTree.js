/*

❓ PROMPT
Determine if a binary tree is a valid binary search tree.

A binary search tree is a binary tree where for each node, all values in the left subtree are smaller than the current node, and all values in the right subtree are greater than the current node.

Example(s)
     10 <--- root
  5      15
3  7   12  17
isValidBST(root) == True

     30 <--- root
 18      50
3  7   33  77
isValidBST(root) == False
Explanation: 7 is smaller than 18, even though it's the right child.

     30 <--- root
 18      50
3  40   33  77
isValidBST(root) == False
Explanation: 40 is larger than 30, even though it's in the left subtree.

  3 <--- root
1   5
isValidBST(root) == True

    3 <--- root
 1     5
   4
isValidBST(root) == False

🔎 EXPLORE
List your assumptions & discoveries:
- All values in the left subtree are less than the value contained within the current node
- All values in the right subtree are greater than the value contained within the current node
- Want to check that if a node has a left child that the left child node's value is less than the current node
- Want to check that if a node has a left right that the right child node's value is less than the current node

Insightful & revealing test cases:

  2 <--- root
1   3
isValidBST(root) == True

  1 <--- root
2   3
isValidBST(root) == False because 2 is the root node's left child node and 2 > 1

  3 <--- root
1   2
isValidBST(root) == False because 2 is the root node's right child node and 3 > 2

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: DFS track all values in a path to the root. If there's larger value return false. If all paths meet this condition than return true
Time: O(N) to visit N number of nodes
Space: O(N) where N is the length of the longest path

📆 PLAN
Outline of algorithm #: 1
- Initialize a max and min variable and set it to the root node's value
- If the current node has a left node then traverse left
    - Make sure that the left node's value is less than the current node's value and the current min
    - Continue iterating left until we've reached the leftmost leaf node
    - If at any time we come across a left node who's value is greater than it's parent or any of it's parents then return false
- Iterate through the right tree after we finish iterating through the left subtree
    - Make sure that the right node's value is greater than the current node's value and the current max
    - Continue iterating right until we've reached the rightmost leaf node
    - If at any time we come across a left node who's value is greater than it's parent or any of it's parents then return false 
- After all nodes have been visited then return true

🛠️ IMPLEMENT
function isValidBST(root) {
def isValidBST(root: Node) -> bool:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.


*/

class Node {
	constructor(val, left = null, right = null) {
		this.value = val;
		this.left = left;
		this.right = right;
	}
}

const isValidBST = (root) => {
	const traverseTree = (current, min, max) => {
		if (!current) return true;

		if (current.value < min || current.value > max) return false;

		return (
			traverseTree(current.left, min, current.value) &&
			traverseTree(current.right, current.value, max)
		);
	};

	return traverseTree(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
