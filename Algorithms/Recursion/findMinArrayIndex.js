// Prompt
// Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.

// Expected Runtime
// Time: O(n) where n is the length of the array. O(n2) If using splicing.
// Space: O(n) to store a call stack frame for each array index. O(n2) If using splicing.

// Examples
// console.log(findMinIndex([10, 20, 30]) === 0);
// console.log(findMinIndex([8, 6, 7, 5, 3, 7]) === 4);
// console.log(findMinIndex([12, 1234, 45, 67, 1]) === 4);

const findMinIndex = (arr) => {
	let currentIndex, currentValue;

	const helper = (
		array,
		minValue = arr[arr.length - 1],
		minIndex = arr.length - 1
	) => {
		// save the current length of the array
		currentIndex = array.length - 1;

		// pop off the last element in the array
		currentValue = array.pop();

		// if the last element in the array is less than the current minimum
		if (currentValue <= minValue) {
			// set the new minimum value and index
			minValue = currentValue;
			minIndex = currentIndex;
		}

		// when there is no more elements left in the array
		if (array.length === 0) {
			// return the minimum index
			return minIndex;
		}

		// else check the remaining elements by calling the function again
		return helper(array, minValue, minIndex);
	};

	return helper(arr);
};
