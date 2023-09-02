/*

Count the number of times a target value is in the binary tree
assumption: values are ints
if target doesnt exist return 0

Approaches
- While loop
- Recusion

Requirements
- Need to initialize a counter variable to 0

*/

class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

const getTargetCount = (node, target) => {
	if (!node) return 0;
	return node.val === target
		? 1
		: 0 + getTargetCount(node.left) + getTargetCount(node.right);
};

// Test case 1: Target value exists in the binary tree
const tree1 = new Node(1);
tree1.left = new Node(2);
tree1.left.left = new Node(2);
tree1.left.right = new Node(3);
tree1.right = new Node(1);
tree1.right.right = new Node(2);
console.log(getTargetCount(tree1, 2)); // Expected output: 3

// Test case 2: Target value doesn't exist in the binary tree
const tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);
console.log(getTargetCount(tree2, 4)); // Expected output: 0

// Test case 3: Target value exists multiple times in the binary tree
const tree3 = new Node(1);
tree3.left = new Node(2);
tree3.left.left = new Node(2);
tree3.left.right = new Node(3);
tree3.right = new Node(2);
tree3.right.right = new Node(2);
console.log(getTargetCount(tree3, 2)); // Expected output: 3

// Test case 4: Empty binary tree
const tree4 = null;
console.log(getTargetCount(tree4, 5)); // Expected output: 0
