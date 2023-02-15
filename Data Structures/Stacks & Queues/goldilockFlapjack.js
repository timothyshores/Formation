/*

PROMPT
A restaurant has a dedicated cook making flapjacks (pancakes) in the mornings. First, they're removed from the griddle and added to a stack as they're ready. Then, servers remove them from the stack to serve customers. The manager wants to serve fresh flapjacks, meaning they never want the stack to be taller than 4. At the same time, they want the stack never to be empty so that no orders have to wait for pancakes.

Write a function that takes a series of numbers representing flapjacks being added and removed from the stack (positive for fresh off the grill, negative for an order being served). Return a tuple (or pair), where the first value is true or false to reflect if the manager's constraints are always satisfied, and the second value is the max height of the stack.

EXAMPLE(S)
goldilockFlapjacks([2, -1]) => [true, 2]
goldilockFlapjacks([-1, 2]) => [false, 1]
goldilockFlapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]

*/

const goldilockFlapjacks = (pancakes) => {
	let currentStack = 0;
	let maximumStack = 0;
	let managerRequirements = true;

	for (const pancake of pancakes) {
		currentStack += pancake;
		maximumStack = Math.max(currentStack, maximumStack);
		if (currentStack > 4 || currentStack < 0) managerRequirements = false;
	}

	return [managerRequirements, maximumStack];
};

// All test cases return true
console.log(goldilockFlapjacks([2])[0] && goldilockFlapjacks([2])[1] === 2);
console.log(!goldilockFlapjacks([-2])[0] && goldilockFlapjacks([-2])[1] === 0);
console.log(goldilockFlapjacks([4])[0] && goldilockFlapjacks([4])[1] === 4);
console.log(!goldilockFlapjacks([5])[0] && goldilockFlapjacks([5])[1] === 5);

console.log(
	goldilockFlapjacks([4, -2, 1, -2])[0] &&
		goldilockFlapjacks([4, -2, 1, -2])[1] === 4
);

console.log(
	goldilockFlapjacks([2, -1, 1, -1, 1])[0] &&
		goldilockFlapjacks([2, -1, 1, -1, 1])[1] === 2
);

console.log(
	!goldilockFlapjacks([4, -2, 1, -2, 4])[0] &&
		goldilockFlapjacks([4, -2, 1, -2, 4])[1] === 5
);

console.log(
	!goldilockFlapjacks([4, -2, 1, -2, -4])[0] &&
		goldilockFlapjacks([4, -2, 1, -2, -4])[1] === 4
);
