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

If the root node is null return an empty array
Create an empty stack and push the root node onto the stack
Create an empty array to store the value of the nodes in the order visited

While the stack is not empty

1. Pop the top element from the stack and store in a variable called current node
2. Push the current node's value to the visited array
3. If the current node has a right child, push the right child onto the stack
4. If the current node has a left child, push the left child onto the stack
5. Repeat steps 1 through 4 until the stack is empty

Return the visited array

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
