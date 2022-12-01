// Prompt
// Given a target integer X, iterate from 1 to X and return a matrix sequence where each array starts with 1 and goes up to the current iteration. Each iteration should increment the array size and values until it reaches X.

// [
// [1],
// [1, 2],
// [1, 2, 3],
// [1, 2, 3, 4],
// [1, 2, 3, 4, 5],
// ...
// [1, 2, 3, ..., X]
// ]

// Expected Time Complexity: O(N^2) to iterate X times from 1 to X
// Expected Space Complexity: O(N^2) to store up to X elements X times in the matrix

/**
 * @param {number} target
 * @return {list[list[int]}
 */
const generateSequence = (target) => {
	const sequence = [];

	for (let i = 0; i < target; i++) {
		const subsequence = [];
		for (let j = 1; j <= i + 1; j++) {
			subsequence.push(j);
		}
		sequence.push(subsequence);
	}

	return sequence;
};

// target == 0
console.log(generateSequence(0)); // [[]]

// target == 1
console.log(generateSequence(1)); // [[1]]

// target is even
console.log(generateSequence(2)); // [[1], [1, 2]]]
console.log(generateSequence(4)); // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

// target is odd
console.log(generateSequence(3)); // [[1], [1, 2], [1, 2, 3]]
console.log(generateSequence(5)); // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]]
