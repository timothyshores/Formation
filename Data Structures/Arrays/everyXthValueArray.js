// Given an array and a number X, return an array containing every *X*th number in the input array.

// Expected Time Complexity: O(N/X) to iterate through the length N array in X gaps
// Expected Space Complexity: O(N/X) to store an array containing on the X elements from the length N array

const everyXth = (input, x) => {
	const xthElements = [];

	for (let i = x - 1; i < input.length; i += x) {
		xthElements.push(input[i]);
	}

	return xthElements;
};

// Example 1
console.log(
	JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 2)) === JSON.stringify([2, 4, 6])
); // true

// Example 2
console.log(
	JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 3)) === JSON.stringify([3, 6])
); // true

// empty array
console.log(JSON.stringify(everyXth([], 1)) === JSON.stringify([])); // true

// array with 1 element and X == 1
console.log(JSON.stringify(everyXth([1], 1)) === JSON.stringify([1])); // true

// array with 1 element and X > 1
console.log(JSON.stringify(everyXth([1], 2)) === JSON.stringify([])); // true

// array with multiple elements and X == 1
console.log(
	JSON.stringify(everyXth([1, 2, 3], 1)) === JSON.stringify([1, 2, 3])
); // true

// array length is divisible by X
console.log(
	JSON.stringify(everyXth([1, 2, 3, 4], 2)) === JSON.stringify([2, 4])
); // true

// array length is not divisible by X (there is a remainder)
console.log(
	JSON.stringify(everyXth([1, 2, 3, 4, 5], 2)) === JSON.stringify([2, 4])
); // true

// array length < X
console.log(
	JSON.stringify(everyXth([1, 2, 3, 4, 5], 6)) === JSON.stringify([])
); // true
