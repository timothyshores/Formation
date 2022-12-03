// Prompt
// Given an array of unique integers, find all pairs of elements with the minimum absolute difference. If there are multiple pairs, return them in ascending order.

//  Runtime
// Expected Time Complexity: O(N log N) to traverse the length N array and organize it
// Expected Space Complexity: O(N) to store up to N elements

// Examples
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Explanation: There is only 1 pair of elements with a minimum absolute difference of 2.

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
// Explanation: There are 3 pairs of elements with a minimum absolute difference of 4 which are listed in ascending order according to the smaller value in the pair.

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: There are 3 pairs of elements with a minimum absolute difference of 1 which are listed in ascending order according to the smaller value in the pair.

const minAbsDiffPairs = (arr) => {
	let pairs = [];
	let minAbsoluteDifference = Infinity;
	// Need to sort the array first
	const sorted = arr.sort((a, b) => a - b);

	let lagValue, leadValue, currentAbsDiff;

	// do a for loop through the sorted array
	for (let i = 0; i < arr.length - 1; i++) {
		// two pointer approach with lag and lead pointers
		lagValue = arr[i];
		leadValue = arr[i + 1];

		// Find the absolute difference Math.abs(lagValue - leadValue)
		currentAbsDiff = Math.abs(leadValue - lagValue);

		// If the difference is less than minAbsoluteDifference push
		if (currentAbsDiff < minAbsoluteDifference) {
			minAbsoluteDifference = currentAbsDiff;
			pairs = [[lagValue, leadValue]];
		} else if (currentAbsDiff === minAbsoluteDifference) {
			pairs.push([lagValue, leadValue]);
		}
	}

	return pairs;
};

// 2-element arrays
console.log(minAbsDiffPairs([1, 2])); // [[1, 2]]
console.log(minAbsDiffPairs([-1, 1])); // [[-1, 1]]
console.log(minAbsDiffPairs([0, 1])); // [[0, 1]]
console.log(minAbsDiffPairs([-1, 0])); // [[-1, 0]]
console.log(minAbsDiffPairs([0, -1])); // [[-1, 0]]
console.log(minAbsDiffPairs([0, 0])); // [[0, 0]]

// array with exactly 1 pair with a minimum absolute difference
console.log(minAbsDiffPairs([1, 3, 6, 10, 15])); // [[1, 3]]
console.log(minAbsDiffPairs([1, 6, 10, 15, 2])); // [[1, 2]]
console.log(minAbsDiffPairs([-10, -9, -1, 6, 10, 2, 4])); // [[-10, -9]]

// array with multiple pairs with the same minimum absolute difference
console.log(minAbsDiffPairs([4, 2, 1, 3])); // [[1, 2], [2, 3], [3, 4]]
console.log(minAbsDiffPairs([-4, -2, -1, -3])); // [[-4, -3,], [-3, -2], [-2, -1]]
