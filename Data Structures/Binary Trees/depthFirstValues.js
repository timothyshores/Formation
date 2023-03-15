/*

PROMPT

Write a function, depthFirstValues, that takes in the root of a binary tree.The function should return an array containing all values of the tree in depth - first order.

EXPLORE

- Need to handle edge cases like null value passed into the function and single root node being passed into function
- If null value is passed into function return an empty array
- If a single root node is passed in return the value of the root node in an array

BRAINSTORM

Approach 1: Iterative DFS
Time complexity: O(N) to visit N number of nodes in the binary tree
Space complexity: O(H) where H is the maximum height in the binary tree

PLAN

IMPLEMENT

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const depthFirstValues = (root) => {};

/*

Verify 

*/
