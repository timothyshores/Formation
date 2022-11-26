// Write a function that receives an array as an input and a target value X,
// The function will return an array of all indices containing value X.

// Time: O(N) to iterate through the length N array
// Space: O(N) to store up to N indices in the result

// Examples
// console.log(indicesOfTarget([30, 30, 30], 30) == [0, 1, 2]);
// console.log(indicesOfTarget([3, 2, 5, 5, 1], 5) == [2, 3]);

const indicesOfTarget = (input, target) => {
	const indices = [];

	// check every element of input array
	for (let i = 0; i < input.length; i++) {
		// if the element is equal to target push to indices array
		if (input[i] === target) indices.push(i);
	}

	return indices;
};

// Test Cases

// empty list
console.log(indicesOfTarget([], 1)); // []

// array with 1 element and target is present
console.log(indicesOfTarget([1], 1)); // [0]
console.log(indicesOfTarget([2], 2)); // [0]

// array with 1 element and target isn't present
console.log(indicesOfTarget([0], 1)); // []
console.log(indicesOfTarget([1], 2)); // []

// array with multiple elements and target is present
console.log(indicesOfTarget([0, 1], 1)); // [1]
console.log(indicesOfTarget([2, 3], 2)); // [0]

// array with multiple elements and target isn't present
console.log(indicesOfTarget([30, 30, 30], 31)); // []
console.log(indicesOfTarget([3, 2, 5, 5, 1], 6)); //  []

// array with multiple elements and target is present multiples times
console.log(indicesOfTarget([30, 30, 30], 30)); // [0, 1, 2]
console.log(indicesOfTarget([3, 2, 5, 5, 1], 5)); //  [2, 3]

// array with multiple elements and target is the only value
console.log(indicesOfTarget([31, 30, 30], 31)); // [0]
console.log(indicesOfTarget([3, 2, 5, 5, 1], 1)); //  [4]
