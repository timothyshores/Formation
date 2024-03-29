/*
Given an integer array and an integer, return how many times the integer exists in the array.

- return integer (count)
- if given empty array, return 0

Find mean of an integer array
Replace all negative values with a 0
Reverse the values in an array
 */

const countInteger = (array, target, index = 0) => {
	if (index >= array.length) return 0;
	if (array[index] === target)
		return 1 + countInteger(array, target, index + 1);
	return countInteger(array, target, index + 1);
};

// All test cases return true
console.log(countInteger([], 0) === 0);
console.log(countInteger([1, 2, 3], 1) === 1);
console.log(countInteger([1, 2, 3], 2) === 1);
console.log(countInteger([1, 2, 3], 3) === 1);
console.log(countInteger([1, 2, 3], 4) === 0);
console.log(countInteger([1, 2, 3], -1) === 0);
console.log(countInteger([1, 2, 3, 3, 4, 5, 6, 3], 4) === 1);
console.log(countInteger([1, 2, 3, 3, 4, 5, 6, 3], 5) === 1);
console.log(countInteger([1, 2, 3, 3, 4, 5, 6, 3], 6) === 1);
console.log(countInteger([1, 2, 3, 3, 4, 5, 6, 3], 3) === 3);
