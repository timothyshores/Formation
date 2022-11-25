// Given an array, reverse every sub-array formed by consecutive k elements.

// Time: O(N) to traverse the length N array
// Space: O(1) to reverse the array in place

// Example 1
// Input: (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]), (k = 3);
// Output: [3, 2, 1, 6, 5, 4, 9, 8, 7];

// Example 2
// Input: (arr = [1, 2, 3, 4, 5, 6, 7, 8]), (k = 5);
// Output: [5, 4, 3, 2, 1, 8, 7, 6];

// Example 3
// Input: (arr = [1, 2, 3, 4, 5, 6]), (k = 1);
// Output: [1, 2, 3, 4, 5, 6];

// Example 4
// Input: (arr = [1, 2, 3, 4, 5, 6, 7, 8]), (k = 10);
// Output: [8, 7, 6, 5, 4, 3, 2, 1];

const reverse = (arr, k) => {
	let lowerPointer, upperPointer, upperPointerHasValidIndex;

	// Loop Math.ceiling(arr.length/k) number of times
	for (let i = 0; i < arr.length; i += k) {
		lowerPointer = i;
		upperPointerHasValidIndex = lowerPointer + k - 1 < arr.length;
		upperPointer = upperPointerHasValidIndex
			? lowerPointer + k - 1
			: arr.length - 1;

		while (lowerPointer < upperPointer) {
			// Swap elements in subarray
			[arr[lowerPointer], arr[upperPointer]] = [
				arr[upperPointer],
				arr[lowerPointer],
			];

			// Increment lowerPointer and decrement upper pointer
			lowerPointer++;
			upperPointer--;
		}
	}

	return arr;
};
