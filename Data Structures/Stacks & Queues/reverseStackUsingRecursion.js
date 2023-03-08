// Prompt: Reverse a stack using recursion

const reverseStack = (stack) => {
	if (stack.length < 2) return stack;

	const result = [];

	const helper = () => {
		if (stack.length) {
			result.push(stack.pop());
			helper();
		}
	};

	helper();
	return result;
};

// Test Cases
console.log(reverseStack([])); // []
console.log(reverseStack([1])); // [1]
console.log(reverseStack([1, 2])); // [2, 1]
console.log(reverseStack([2, 1])); // [1, 2]
console.log(reverseStack([1, 2, 3])); // [3, 2, 1]
console.log(reverseStack([3, 2, 1])); // [1, 2, 3]
console.log(reverseStack([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseStack([4, 3, 2, 1])); // [1, 2, 3, 4]
console.log(reverseStack([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
