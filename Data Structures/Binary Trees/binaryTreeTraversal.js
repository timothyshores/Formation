/*

Concept : Binary Trees
- no more than two children
- root can be considered a binary tree 
- can be only one path from one node to another 
- collection of nodes 

class BinaryNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.left = right;
    }
}

BFS vs DFS
- BFS searches nodes near the root first
- BFS searches nodes furthest the root first


*/

class TreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

const bfs = (node) => {
    if (!node) console.log("Empty binary search tree");
    
    const queue = [node];
    
	while (queue.length) {
		const current = queue.shift();
        
        console.log(current.value);
        
		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}
};

bfs(new TreeNode(
	6,
	new TreeNode(3, new TreeNode(2), new TreeNode(4)),
	new TreeNode(8)
)); // 6, 3, 8, 2, 4

/*

In order - visit the left subtree, visit the root node and then the right subtree
Pre order - visit the root node, visit the left subtree and then the right subtree
Post order - visit the left subtree, visit the right subtree and then the root node

*/

const dfsInOrder = node => {
    if (!node) return;
    depthFirstSearch(node.left);
    console.log(node.value);
    depthFirstSearch(node.right);
}

const dfsPreOrder = (node) => {
	if (!node) return;
	console.log(node.value);
	depthFirstSearch(node.left);
	depthFirstSearch(node.right);
};

const dfsPostOrder = (node) => {
	if (!node) return;
	depthFirstSearch(node.left);
	depthFirstSearch(node.right);
	console.log(node.value);
};

// Amitabh Srivastav