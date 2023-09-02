/*

Find the height of a binary tree

*/

// Recursive implementation using DFS
const heightRecursive = (node) => {
	if (node === null) {
		return 0;
	} else {
		const leftHeight = heightRecursive(node.left);
		const rightHeight = heightRecursive(node.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}
};

// Iterative approach using a queue
const heightIterative = (root) => {
	if (!root) return 0;

	let height = 0;
	let queue = [root];

	while (queue.length) {
		height++;
		let levelSize = queue.length;

		for (let i = 0; i < levelSize; i++) {
			let node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return height;
};
