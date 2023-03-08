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
