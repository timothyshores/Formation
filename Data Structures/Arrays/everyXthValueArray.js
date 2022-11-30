// Given an array and a number X, return an array containing every *X*th number in the input array.

// Expected Time Complexity: O(N/X) to iterate through the length N array in X gaps
// Expected Space Complexity: O(N/X) to store an array containing on the X elements from the length N array

const everyXth = (input, x) => {
    
};

// Examples
console.log(
	JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 2)) === JSON.stringify([2, 4, 6])
);

console.log(
	JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 3)) === JSON.stringify([3, 6])
);

// Independently create a comprehensive test suite for this problem. It should cover most general and boundary cases without enumerating every possible input permutation.
// empty array
// array with 1 element and X == 1
// array with 1 element and X > 1
// array with multiple elements and X == 1
// array length is divisible by X
// array length is not divisible by X (there is a remainder)
// array length < X
