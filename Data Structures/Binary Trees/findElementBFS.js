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

🛠️ IMPLEMENT

*/

class TreeNode {
	constructor(value = 0, leftChild = null, rightChild = null) {
		this.value = value;
		this.left = leftChild;
		this.right = rightChild;
	}
}

const BFSTree = (root, target) => {};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/
