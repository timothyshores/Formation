// Count the number of items in the tree that satisfy a predicate function

const getPredicateCount = (node, predicateFunction) => {
	if (!node) return 0;
	return (
		(predicateFunction(node.val) ? 1 : 0) +
		getTargetCount(node.left) +
		getTargetCount(node.right)
	);
};

const isOdd = num => num % 2 === 1;

console.log(getPredicateCount(root, isOdd));

