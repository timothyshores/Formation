/*

Subsets of Length K

You are given an array of distinct elements and an integer k. Your task is to implement a function getAllSubsetsOfLengthK that returns all possible subsets of the given array with a length of k.

Examples
getAllSubsetsOfLengthK([1, 2, 3], 0) => [[]]
getAllSubsetsOfLengthK([1, 2, 3], 1) => [[1], [2], [3]]
getAllSubsetsOfLengthK([1, 2, 3], 2) => [[1, 2], [1, 3], [2, 3]]
getAllSubsetsOfLengthK([1, 2, 3], 3) => [[1, 2, 3]]
getAllSubsetsOfLengthK(["A", "B", "C"], 0) => [[]]
getAllSubsetsOfLengthK(["A", "B", "C"], 1) => [['A'], ['B'], ['C']]
getAllSubsetsOfLengthK(["A", "B", "C"], 2) => [['A', 'B'], ['A', 'C'], ['B', 'C']]
getAllSubsetsOfLengthK(["A", "B", "C"], 3) => [['A', 'B', 'C']]

Constraints:
- The input array arr contains distinct elements.
- The length of the input array is at most 10^5.
- 0 <= k <= length of the input array.

*/

const getAllSubsetsOfLengthK = (arr, k) => {
	const subsetsArr = [];

	const helper = (index = 0, currentSubset = []) => {
		// Base case: When the current subset has length K
		if (currentSubset.length === k) {
			subsetsArr.push([...currentSubset]);
			return;
		}

		// Base case: When all elements have been visited
		if (index === arr.length) return;

		// Recursive case: Include the current element in the subset
		currentSubset.push(arr[index]);
		helper(index + 1, currentSubset);

		// Recursive case: Exclude the current element in the subset
		currentSubset.pop();
		helper(index + 1, currentSubset);
	};

	helper(0);
	return subsetsArr;
};

// Test cases
console.log(getAllSubsetsOfLengthK([1, 2, 3], 0)); // [[]]
console.log(getAllSubsetsOfLengthK([1, 2, 3], 1)); // [[ 1 ], [ 2 ], [ 3 ]]
console.log(getAllSubsetsOfLengthK([1, 2, 3], 2)); // [[ 1, 2 ], [ 1, 3 ], [ 2, 3 ]]
console.log(getAllSubsetsOfLengthK([1, 2, 3], 3)); // [[1, 2, 3]]
console.log(getAllSubsetsOfLengthK(["A", "B", "C"], 0)); // [[]]
console.log(getAllSubsetsOfLengthK(["A", "B", "C"], 1)); // [[ 'A' ], [ 'B' ], [ 'C' ]]
console.log(getAllSubsetsOfLengthK(["A", "B", "C"], 2)); // [[ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'C' ]]
console.log(getAllSubsetsOfLengthK(["A", "B", "C"], 3)); // [['A', 'B', 'C']]
