// Prompt
// Given an array of ints, compute recursively the number of times that the value 6 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

// Expected Runtime
// Time: O(n) where n is the length of the array
// Space: O(n) to store a call stack frame for each array index

// Examples
// console.log(array6([6, 6], 0) === 2); // true
// console.log(array6([1, 2, 6], 0) === 1); // true
// console.log(array6([1, 2, 3, 4], 0) === 0); // true

const array6 = (nums, index) => {
	if (index >= nums.length) return 0;
	if (nums[index] === 6) return 1 + array6(nums, index + 1);
	return array6(nums, index + 1);
};
