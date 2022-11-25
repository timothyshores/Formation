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

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output1 = [3, 2, 1, 6, 5, 4, 9, 8, 7].toString();
console.log(reverse(array1, 3).toString() === output1); // true

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const output2 = [5, 4, 3, 2, 1, 8, 7, 6].toString();
console.log(reverse(array2, 5).toString() === output2); // true

const array3 = [1, 2, 3, 4, 5, 6];
const output3 = [1, 2, 3, 4, 5, 6].toString();
console.log(reverse(array3, 1).toString() === output3); // true

const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
const output4 = [8, 7, 6, 5, 4, 3, 2, 1].toString();
console.log(reverse(array4, 10).toString() === output4); // true

const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output5 = [4, 3, 2, 1, 8, 7, 6, 5, 9].toString();
console.log(reverse(array5, 4).toString() === output5); // true

const array6 = [1, 2, 3, 4, 5, 6, 7, 8];
const output6 = [4, 3, 2, 1, 8, 7, 6, 5].toString();
console.log(reverse(array6, 4).toString() === output6); // true

const array7 = [1, 2, 3, 4, 5, 6, 7, 8];
const output7 = [5, 4, 3, 2, 1, 8, 7, 6].toString();
console.log(reverse(array7, 5).toString() === output7); // true

const array8 = [1, 2, 3, 4, 5, 6];
const output8 = [4, 3, 2, 1, 6, 5].toString();
console.log(reverse(array8, 4).toString() === output8); // true

console.log(reverse([1], 1) == 1); // true
console.log(reverse([1], 2) == 1); // true
console.log(reverse([], 1).length === 0); // true
console.log(reverse([], 2).length === 0); // true
