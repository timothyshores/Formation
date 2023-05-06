/*

PROMPT

Write a function called any that takes in the head node of a singly linked list and a test function
    If any node in the singly linked list meets the condition of the test function the return true
    If all nodes in the singly linked list do NOT meet the condition of the test function then return false

Example test functions include
    isEven which returns true if the value of a node is even
    squareRootIsInteger returns true when the square root of a value of a node is an integer e.g. 4, 9, 16, 25, 36, etc.

*/

const any = (head, test) => {};

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

// Test functions

// All test cases return true
