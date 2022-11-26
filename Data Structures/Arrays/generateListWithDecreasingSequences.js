// Prompt
// Given a target integer X, iterate from X to 1 and return a list of sequences where each  starts with the current iteration and goes down to Each iteration should decrement the array size and values until it reaches 1.

// Example
// console.log(generateSequence(2)) // [[2,1], [1]]
// console.log(generateSequence(3)) // [[3,2,1], [2,1], [1]]

// Expected space time complexity
// Time: O(X2) to iterate X times from 1 to X
// Space: O(X2) to store up to X elements X times in the matrix

const generateSequence = (target) => {
	const array = [];
	let subarray = [];

	for (let i = target; i > 0; i--) {
		for (let j = i; j > 0; j--) {
			subarray.push(j);
		}

		array.push(subarray);
		subarray = [];
	}

	return array;
};

// Test Cases
console.log(generateSequence(0)); // []
console.log(generateSequence(1)); // [1]
console.log(generateSequence(2)); // [[2,1], [1]]
console.log(generateSequence(3)); // [[3,2,1], [2,1], [1]]
console.log(generateSequence(4)); // [[4, 3, 2, 1], [3,2,1], [2,1], [1]]
console.log(generateSequence(5)); // [[5, 4, 3, 2, 1], [4, 3, 2, 1], [3,2,1], [2,1], [1]]
