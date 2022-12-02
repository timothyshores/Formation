// Prompt
// Given an array and a target count X, return the number of elements that is repeated exactly X times.

// Expected Runtime
// Time: O(N) to iterate through the length N array
// Space: O(N) to store up to N elements
// Examples
// [1, 2, 3, 1, 2, 3], 2 => 3
// [1, 2, 3, 1, 2, 3], 3 => 0
// [1, 3, 3, 5, 5, 5, 5, 5, 3], 3 => 1

/**
 * @param {number[]} arr
 * @param {number} exactOccurrences
 * @return {number}
 */
const countExactOccurrences = (arr, exactOccurrences) => {
	const counter = {};

	for (const element of arr) {
		counter[element] = (counter[element] || 0) + 1;
	}

	return Object.values(counter).filter((value) => value === exactOccurrences)
		.length;
};

