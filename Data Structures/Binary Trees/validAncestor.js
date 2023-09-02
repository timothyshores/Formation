/*

Given a binary tree, of numbers, and two numbers A and B, determine if A is an ancestor of B.


EXAMPLE(S)
  3
1   2
A=3 and B=1 returns true
A=3 and B=2 returns true
A=2 and B=3 returns false

  3
1   2
   4 5
A=3 and B=5 returns true
A=2 and B=5 returns true
A=5 and B=2 returns false
A=1 and B=5 returns false
 

FUNCTION SIGNATURE
function validAncestor(root, a, b) {

Explore
- Looking to check if A is a parent, parent of a parent, parent of a parent of a parent, etc. of B
- A & B are not guaranteed to be in the array

Brainstorm
- Want to 

*/

class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const validAncestorTim = (root, a, b) => {
	// Found the subtree where root's value is A
	if (root.val === a) {
		// Either the left or right child node is a direct ancestor of A
		if (root.left === b || root.left === a) {
            return true;
        }
        // Found A explore left subtree
        else if (root.left) {
			return validAncestorTim(root.left, root.left.val, b);
        }
        // Found A explore right child subtree
        else if (root.right) {
            return validAncestorTim(root.right, root.right.val, b)
        }
        // A is a leaf node with no child node
        else {
            return false;
        }
	}

	// Root value is not A, visit left and right nodes to continue checking
	else if (root.left || root.right) {
		return (
			(root.left && validAncestorTim(root.left, a, b)) ||
			(root.right && validAncestorTim(root.right, a, b))
		);
	}

	// Root is a leaf node with no children
	else {
		return false;
	}
};

//   0
// 1   2
//    3 4

let tree1 = new TreeNode(
	0,
	new TreeNode(1, null, null),
	new TreeNode(2, new TreeNode(3), new TreeNode(4))
);

//    1
//  3   2
//     5 9

let tree2 = new TreeNode(
	1,
	new TreeNode(3, null, null),
	new TreeNode(2, new TreeNode(5, null, null), new TreeNode(9, null, null))
);

console.log("Timothy");
console.log("-------");
console.log(validAncestorTim(tree1, 3, 4) == false);
console.log(validAncestorTim(tree2, 2, 2) == true);
console.log(validAncestorTim(tree2, 1, 2) == true);
console.log(validAncestorTim(tree2, 1, 7) == false);
console.log(validAncestorTim(tree2, 1, 9) == true);
console.log("");

// 