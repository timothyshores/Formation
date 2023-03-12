/* 

PROMPT: Creating the following tree and searching through it

               21
       14                   28
  11        18         25       32
5   12   15    19   23   27   30   37

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

Approach 1: Use recursion
Time complexity: O(log N)
Space complexity: O(log N)

PLAN

IMPLEMENT

*/

const recursiveSearchInBST = (root, target) => {};

/*

VERIFY all test cases return true

*/
