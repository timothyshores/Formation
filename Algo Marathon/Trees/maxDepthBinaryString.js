/*

You are given a binary tree that is represented by a string. Nodes have no value. 
A 0 represents null and a (00) represents a node with no children, a leaf node. 
((00)0) would represent a tree where the root has one left node and no right node. 
((00)(00)) represents a tree with one left and one right node.

Given this representation of the tree, return the maximum depth of the tree.

EXAMPLE(S)
(((00)0)0) represents this tree with a max depth of 2
    0
   /
  0
 /
0

((0(0(00)))(00)) represents this tree with a max depth of 3
    0
   /  \
  0    0
   \
    0
      \
       0

Brainstorm
What approaches could work?
Algorithm 1: Use a stack to track open and close parenthesis
Time Complexity: O(N)
Best Case Space Complexity: O(1) when the first character is the close parenthesis
Average Case Space Complexity: O(N/2) for valid binary trees strings with equal open and close parenthesis
Worst Case Space Complexity: O(N) where N represents the number of open parenthesis

What approaches could work?
Algorithm 2: Use a counter variable to track open and close parenthesis
Time Complexity: O(N)
Space Complexity: O(1) to store a maxDepth and currentDepth counts

Pseudocode Plan: 
- we could perform this "recursion" in a for loop 
- use a stack
    - empty stack -> made it to the midpoint or starting out on the branch 
    - length of stack -> can potentially be used to get the max depth
    - append/pop -> append "(" and pop ")" 

FUNCTION SIGNATURE
def maxDepth(tree: str) -> int:
*/

const maxDepthStack = (str) => {
	const stack = [];
	let maxDepth = 0;

	for (const char of str) {
		if (char === "(") {
			stack.push("(");
			maxDepth = Math.max(maxDepth, stack.length);
		} else if (char === ")") {
			if (stack.length === 0) return -1;
			stack.pop("");
		} else {
			continue;
		}
	}

	return stack.length === 0 ? maxDepth - 1 : -1;
};

// All test cases return true

// Test Cases for maxDepthStack
console.log(maxDepthStack("") === -1);
console.log(maxDepthStack("(00)") === 0);
console.log(maxDepthStack("((00)") === -1);
console.log(maxDepthStack("(00))") === -1);
console.log(maxDepthStack("((00)(00))") == 1);
console.log(maxDepthStack("(((00)0)0)") == 2);
console.log(maxDepthStack("(((00)(00)0)0)") == 2);
console.log(maxDepthStack("(((00)(00)0)(00)0)") == 2);
