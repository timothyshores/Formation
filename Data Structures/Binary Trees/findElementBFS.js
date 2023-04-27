/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree and a target element's value, determine if the tree contains the target using breadth first search (BFS).

Examples:
• Given a binary tree:
                 3
                / \
              29   4
              /     \
             2       2
                    /
                   9
• For target: 1 // returns False
• For target: 2 // returns True

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
· If the null tree is passed in return false
· 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative BFS
Worst case time: O(N) to traverse N number of nodes where target is the bottom right node
Best case time: O(1) where the value of the root node is the target
Space: O(N) to store N number of nodes in a queue if the binary tree is a Linked List e.g. exclusively left or right child nodes only

📆 PLAN
Outline of algorithm #: 
- Edge case if a empty tree is passed into the function return false
- Create a queue with the root node using an array
- Iterate through the binary tree using a while loop when the queue is NOT empty
- Create a variable called current to store the current node
- Dequeue the last element in the queue using JavaScript's built in Array .pop() method
- Check if the current node's value is equal to target
    - If the current node's value is equal to target return true and exit the while loop
    - Else the current node's value is NOT equal to target
        - If there's a left child node then add it to the queue using .unshift()
        - If there's a right child node then add it to the queue using .unshift()
- Continue checking each node in the queue if it's value is equal to target
- If we traverse all nodes in the binary tree and do NOT find the target return false

🛠️ IMPLEMENT

*/

class TreeNode {
	constructor(value = 0, leftChild = null, rightChild = null) {
		this.value = value;
		this.left = leftChild;
		this.right = rightChild;
	}
}

const BFSTree = (root, target) => {
	if (!root) return false;

	const queue = [root];

	while (queue.length) {
		const current = queue.pop();
		if (current.value === target) return true;
		if (current.left) queue.unshift(current.left);
		if (current.right) queue.unshift(current.right);
	}

	return false;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// All test cases return true
const tree = new TreeNode(
	3,
	new TreeNode(29, new TreeNode(2)),
	new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
);

// Values contained in binary tree
console.log(BFSTree(tree, 2));
console.log(BFSTree(tree, 3));
console.log(BFSTree(tree, 4));
console.log(BFSTree(tree, 9));
console.log(BFSTree(tree, 29));
console.log(BFSTree(new TreeNode(1), 1));

// Values NOT contained in binary tree
console.log(!BFSTree(null, 1));
console.log(!BFSTree(tree, 0));
console.log(!BFSTree(tree, 1));
console.log(!BFSTree(tree, 28));
console.log(!BFSTree(tree, 30));
console.log(!BFSTree(new TreeNode(1), 0));
console.log(!BFSTree(new TreeNode(1), 2));
console.log(!BFSTree(new TreeNode(1), 3));
