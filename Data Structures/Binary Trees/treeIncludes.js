/*

PROMPT

Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// Recursive DFS Implementation
const treeIncludesDFS = (root, target) => {
	if (!root) return false;
	if (root.val === target) return true;

	return (
		treeIncludesDFS(root.left, target) || treeIncludesDFS(root.right, target)
	);
};

// Iterative BFS Implementation
const treeIncludesBFS = (root, target) => {
	if (!root) return false;
	const queue = [root];

	while (queue.length) {
		const node = queue.shift();
		if (node.val === target) return true;
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}

	return false;
};

// Test 1
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludesDFS(a1, "e")); // true
console.log(treeIncludesBFS(a1, "e")); // true

// Test 2
const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");
const e2 = new Node("e");
const f2 = new Node("f");

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludesDFS(a2, "a")); // true
console.log(treeIncludesBFS(a2, "a")); // true

// Test 3
const a3 = new Node("a");
const b3 = new Node("b");
const c3 = new Node("c");
const d3 = new Node("d");
const e3 = new Node("e");
const f3 = new Node("f");

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludesDFS(a3, "n")); // false
console.log(treeIncludesBFS(a3, "n")); // false

// Test 4
const a4 = new Node("a");
const b4 = new Node("b");
const c4 = new Node("c");
const d4 = new Node("d");
const e4 = new Node("e");
const f4 = new Node("f");
const g4 = new Node("g");
const h4 = new Node("h");

a4.left = b4;
a4.right = c4;
b4.left = d4;
b4.right = e4;
c4.right = f4;
e4.left = g4;
f4.right = h4;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludesDFS(a4, "f")); // true
console.log(treeIncludesBFS(a4, "f")); // true

// Test 5
const a5 = new Node("a");
const b5 = new Node("b");
const c5 = new Node("c");
const d5 = new Node("d");
const e5 = new Node("e");
const f5 = new Node("f");
const g5 = new Node("g");
const h5 = new Node("h");

a5.left = b5;
a5.right = c5;
b5.left = d5;
b5.right = e5;
c5.right = f5;
e5.left = g5;
f5.right = h5;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludesDFS(a5, "p")); // false
console.log(treeIncludesBFS(a5, "p")); // false

// Test 6
console.log(treeIncludesDFS(null, "b")); // false
console.log(treeIncludesBFS(null, "b")); // false
