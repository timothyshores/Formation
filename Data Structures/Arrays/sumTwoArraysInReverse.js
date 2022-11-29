// Given two arrays of equal length, return an array summing them together with the second array being traversed in reverse.

// Expected Runtime
// Time: O(N) to iterate through the length N arrays
// Space: O(N) to store the length N result

const sumInReverse = (array1, array2) => {
	const result = [];

	for (let i = 0; i < array1.length; i++) {
		result.push(array1[i] + array2[array2.length - 1 - i]);
	}

	return result;
};

// Example 1
// array1 = [1, 2, 3]
// array2 = [4, 6, 10]
// result = [11, 8, 7]
// Explanation: array1 is being traversed from left to right and array2 is traversed right to left, so 1 is added to 10 for 11, and so on.

// Example 2
// array1 = [1, 5, 10, 12]
// array2 = [2, 4, 3, 5]
// result = [6, 8, 14, 14]

// empty array
console.log(sumInReverse([], [])); // []

// 1-element arrays
console.log(sumInReverse([1], [1])); // [2]

// odd-length arrays
console.log(sumInReverse([1, 2, 3], [4, 6, 10])); // [11, 8, 7]

// even-length arrays
console.log(sumInReverse([1, 2], [3, 4])); // [5,5]
console.log(sumInReverse([1, 5, 10, 12], [2, 4, 3, 5])); // [6, 8, 14, 14]
