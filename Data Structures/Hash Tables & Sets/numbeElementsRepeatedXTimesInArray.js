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

// empty array
console.log(countExactOccurrences([], 1) === 0); // true
console.log(countExactOccurrences([], 2) === 0); // true

// 1-element array
console.log(countExactOccurrences([1], 1) === 1); // true
console.log(countExactOccurrences([1], 2) === 0); // true

// X element array all with unique values
console.log(countExactOccurrences([1, 2, 3], 1) === 3); // true
console.log(countExactOccurrences([1, 2, 3], 2) === 0); // true

// X element array all with the same value
console.log(countExactOccurrences([1, 1], 1) === 0); // true
console.log(countExactOccurrences([1, 1], 2) === 1); // true
console.log(countExactOccurrences([1, 1, 1], 3) === 1); // true
console.log(countExactOccurrences([1, 1, 1, 1], 4) === 1); // true

// array with exactly one value occurring X times
console.log(countExactOccurrences([1, 2, 2], 2) === 1); // true
console.log(countExactOccurrences([1, 2, 3, 3], 2) === 1); // true
console.log(countExactOccurrences([1, 2, 2, 2], 3) === 1); // true

// array with multiple values occurring X times
console.log(countExactOccurrences([1, 2, 2, 1], 2) === 2); // true
console.log(countExactOccurrences([2, 1, 2, 1], 2) === 2); // true
console.log(countExactOccurrences([2, 2, 1, 1], 2) === 2); // true

// array with all values occurring < X times
console.log(countExactOccurrences([1, 2], 2) === 0); // true
console.log(countExactOccurrences([1, 2], 10) === 0); // true
console.log(countExactOccurrences([1, 2, 1, 2], 3) === 0); // true

// array with value occurring > X times
console.log(countExactOccurrences([1, 1, 1], 2) === 0); // true
console.log(countExactOccurrences([1, 1, 1, 1], 3) === 0); // true
console.log(countExactOccurrences([1, 1, 1, 1, 1], 4) === 0); // true
