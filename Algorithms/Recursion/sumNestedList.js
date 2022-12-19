// Prompt
// Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.
// What is the shape or pattern of this nested array structure?

// Expected Runtime
// Time: O(n), where n is the total count of numbers in the nested array
// Space: O(d), where d is the depth of the deepest nesting, since a stack frame is needed for each recursive call.

// Examples
// console.log(sumNestedList([1, 2, 3]) === 6);
// console.log(sumNestedList([1, [1, 2, 3], 3]) === 10);

const sumNestedList = (list) => {
	let sum = 0;

	for (const num of list) {
		sum += Array.isArray(num) ? sumNestedList(num) : num;
	}

	return sum;
};
