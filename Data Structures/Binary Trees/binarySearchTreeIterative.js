/* 

PROMPT: Creating the following tree and searching through it

                  21
       14                   28
  11        18         25       32
5   12   15    19    23   27   30   37

*/

class ListNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const leftLeftTree = new ListNode(11, new ListNode(5), new ListNode(12));
const leftRightTree = new ListNode(18, new ListNode(15), new ListNode(19));
const rightLeftTree = new ListNode(25, new ListNode(23), new ListNode(27));
const rightRightTree = new ListNode(32, new ListNode(30), new ListNode(37));
const leftSubTree = new ListNode(14, leftLeftTree, leftRightTree);
const rightSubTree = new ListNode(28, rightLeftTree, rightRightTree);
const root = new ListNode(21, leftSubTree, rightSubTree);

/*

EXPLORE

Four possible scenarios searching a BST for a target value

If target value is equal to root.value
    Return true
If target value is less than root.value
    Search the left subtree
If target value is greater than root.value
    Search the right subtree
If root.value is null
    Return false

BRAINSTORM

Approach 1: Use iterative while loop with a pointer to the current node
Time complexity: O(log N)
Space complexity: O(1)

Plan

If a null value is passed in as a root return false
If the root value is equal to target return true

Create a pointer variable called node and set it to the root

Create a while loop that continues if the current node is not equal to the target value

If the target value is less than the current node's value and the current node has a left child 
    Set the current node to the left child

If the target value is greater than the current node's value and the current node has a right child 
    Set the current node to the right child

If either condition is return return false
    The target value is less than the current node's value and the current node does NOT have a left child 
    The target value is greater than the current node's value and the current node does NOT has a right child 

Return true

Implement

*/

const iterativeSearchInBST = (root, target) => {};

/*

Verify all test cases return true

*/
