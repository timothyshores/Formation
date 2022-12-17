// Prompt
// Given an array of ints, compute recursively if there's a value immediately followed by that value times 10 somewhere in the array

// Expected Runtime
// Time: O(n) where n is the length of the array
// Space: O(n) to store a call stack frame for each array index

// Examples
// console.log(array10x([3], 0) === false); // true
// console.log(array10x([3, 30], 0) === true); // true
// console.log(array10x([1, 2, 20], 0) === true); // true

const array10x = (nums) => {
	if (nums.length < 2) return false;

	let lastElement = nums.pop();
	let secondToLastElement = nums[nums.length - 1];

	if (secondToLastElement * 10 === lastElement) return true;

	return array10x(nums);
};

// All test cases return true

// empty array
console.log(!array10x([]));

// array with 1 element
console.log(!array10x([1]));
console.log(!array10x([0]));
console.log(!array10x([3]));
console.log(!array10x([10]));
console.log(!array10x([-1]));

// array with 2 single digit elements
console.log(array10x([0, 0]));
console.log(!array10x([1, 2]));
console.log(!array10x([-1, -2]));

// array with 2 elements first is 10x the second
console.log(!array10x([10, 1]));
console.log(!array10x([20, 2]));
console.log(!array10x([30, 3]));

// array with 2 elements second is 10x the first
console.log(array10x([1, 10]));
console.log(array10x([2, 20]));
console.log(array10x([3, 30]));
console.log(array10x([-1, -10]));

// array with multiple elements and desired pair somewhere in the middle
console.log(array10x([1, 2, 20, 3]));
console.log(array10x([1, 2, 20, 3, 4]));
console.log(array10x([1, 2, 3, 30, 4]));

// array with multiple elements but the 10x value is far away
console.log(!array10x([1, 2, 10]));
console.log(!array10x([1, 2, 3, 10]));
console.log(!array10x([1, 2, 3, 4, 10]));
console.log(!array10x([1, 2, 3, 4, 5, 10]));
