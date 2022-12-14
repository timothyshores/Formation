// Prompt
// Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

// Modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array. But [1, [2, 3]] evaluates to 11 because the (2 + 3) is at depth 2, so 5 * 2 is 10, then add the one for 11.

// Function Signature
// def sumNestedListWithDepth(nestedList: list[int]) -> int:

// Expected Runtime
// Time: O(n), where n is the total count of numbers in the nested array
// Space: O(d), where d is the depth of the deepest nesting, since a stack frame is needed for each recursive call.

const sumNestedListWithDepth = (list, depth = 2) => {
	let sum = 0;

	for (let i = 0; i < list.length; i++) {
		if (Array.isArray(list[i])) {
			sum += sumNestedListWithDepth(list[i], depth + 1) * depth;
		} else {
			sum += list[i];
		}
    }
    
	return sum;
};

// All test cases return true
console.log(sumNestedListWithDepth([1]) === 1);
console.log(sumNestedListWithDepth([[1]]) === 2);
console.log(sumNestedListWithDepth([[[1]]]) === 6);
console.log(sumNestedListWithDepth([[[[]]]]) === 0);
console.log(sumNestedListWithDepth([1, 2, 3]) === 6);
console.log(sumNestedListWithDepth([[[[1]]]]) === 24);
console.log(sumNestedListWithDepth([1, [2, 3]]) === 11);
console.log(sumNestedListWithDepth([1, [2, [3]]]) === 23);
console.log(sumNestedListWithDepth([1, [1, 2, 3], 3]) === 16);
console.log(sumNestedListWithDepth([1, [1, [1, [1, [1]]]]]) === 153);
console.log(sumNestedListWithDepth([1, [1, [2], [], [], [], 3], 3]) === 24);
console.log(
	sumNestedListWithDepth([1, [1, [2], [], [[[[]]]], [], 3], 3]) === 24
);
