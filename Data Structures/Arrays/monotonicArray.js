// Prompt
// Determine if an array is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.

// Expected Runtime
// Time: O(N) to iterate through the length N array
// Space: O(1) to store a constant number of variables

// Examples
// [1] => true
// [1, 2] => true
// [2, 1] => true
// [2, 1, 3] => false

const isMontonic = (array) => {
	if (array.length < 2) return true;

	// check every element of the array
	// if all numbers are either all the same, all increase or all decreasing
	// return true

	// else return false
};

// Test the following
// empty array
// 1-element array
// strictly increasing array
// strictly decreasing array
// array with adjacent duplicates
// array with separated duplicates
// all elements of the same value
