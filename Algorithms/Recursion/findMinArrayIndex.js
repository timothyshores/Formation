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

// All test cases return true
console.log(findMinIndex([1]) === 0);
console.log(findMinIndex([2]) === 0);
console.log(findMinIndex([-1]) === 0);
console.log(findMinIndex([10]) === 0);
console.log(findMinIndex([100]) === 0);
console.log(findMinIndex([15, 11]) === 1);
console.log(findMinIndex([0, 2, 1]) === 0);
console.log(findMinIndex([3, 0, 1]) === 1);
console.log(findMinIndex([3, 2, 1]) === 2);
console.log(findMinIndex([10, 2, 30]) === 1);
console.log(findMinIndex([10, 20, 3]) === 2);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([20, 10, 30]) === 1);
console.log(findMinIndex([30, 20, 10]) === 2);
console.log(findMinIndex([10, 20, 30, 10]) === 0);
console.log(findMinIndex([10, 10, 10, 10]) === 0);
console.log(findMinIndex([-10, -5, -3, -30]) === 3);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) === 4);
console.log(findMinIndex([15, 11, 12, 13, 14]) === 1);
console.log(findMinIndex([12, 1234, 45, 67, 1]) === 4);
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) === 3);
