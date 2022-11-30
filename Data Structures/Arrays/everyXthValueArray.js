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
