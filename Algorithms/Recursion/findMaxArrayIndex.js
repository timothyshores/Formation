// Prompt
// Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.

// Expected Runtime
// Time: O(n) where n is the length of the array. O(n2) If using splicing.
// Space: O(n) to store a call stack frame for each array index. O(n2) If using splicing.

// Examples
// console.log(findMaxIndex([10, 20, 30]) === 2);
// console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) === 0);
// console.log(findMaxIndex([12, 1234, 45, 67, 1]) === 1);

const findMaxIndex = (arr) => {
	let currentIndex, currentValue;

	const helper = (
		array,
		maxValue = arr[arr.length - 1],
		maxIndex = arr.length - 1
	) => {
		// save the current length of the array
		currentIndex = array.length - 1;

		// pop off the last element in the array
		currentValue = array.pop();

		// if the last element in the array is less than the current minimum
		if (maxValue <= currentValue) {
			// set the new minimum value and index
			maxValue = currentValue;
			maxIndex = currentIndex;
		}

		// when there is no more elements left in the array
		if (array.length === 0) {
			// return the minimum index
			return maxIndex;
		}

		// else check the remaining elements by calling the function again
		return helper(array, maxValue, maxIndex);
	};

	return helper(arr);
};

// All test cases return true
console.log(findMaxIndex([0]) === 0);
console.log(findMaxIndex([11]) === 0);
console.log(findMaxIndex([-1]) === 0);
console.log(findMaxIndex([15, 11]) === 0);
console.log(findMaxIndex([30, 20, 10]) === 0);
console.log(findMaxIndex([30, 99, 10]) === 1);
console.log(findMaxIndex([10, 20, 30]) === 2);
console.log(findMaxIndex([20, 10, 30]) === 2);
console.log(findMaxIndex([10, 10, 10, 10]) === 0);
console.log(findMaxIndex([10, 20, 30, 10]) === 2);
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) === 0);
console.log(findMaxIndex([-10, -5, -3, -30]) === 2);
console.log(findMaxIndex([15, 11, 12, 13, 14]) === 0);
console.log(findMaxIndex([12, 1234, 45, 67, 1]) === 1);
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) === 1);
