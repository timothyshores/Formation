/*

PROMPT

Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

You may assume that the input tree is non-empty.

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const maxPathSum = (root) => {
	if (!root) return -Infinity;
	if (!root.left && !root.right) return root.val;
	return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

// Test 1
const a1 = new Node(3);
const b1 = new Node(11);
const c1 = new Node(4);
const d1 = new Node(4);
const e1 = new Node(-2);
const f1 = new Node(1);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(maxPathSum(a1)); // 18

// Test 2
const a2 = new Node(5);
const b2 = new Node(11);
const c2 = new Node(54);
const d2 = new Node(20);
const e2 = new Node(15);
const f2 = new Node(1);
const g2 = new Node(3);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
e2.left = f2;
e2.right = g2;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(maxPathSum(a2)); // 59

// Test 3
const a3 = new Node(-1);
const b3 = new Node(-6);
const c3 = new Node(-5);
const d3 = new Node(-3);
const e3 = new Node(0);
const f3 = new Node(-13);
const g3 = new Node(-1);
const h3 = new Node(-2);

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;
e3.left = g3;
f3.right = h3;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

console.log(maxPathSum(a3)); // -8

// Test 4
console.log(maxPathSum(new Node(42))); // 42
