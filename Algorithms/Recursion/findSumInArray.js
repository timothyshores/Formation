// Recursive sum returns the sum of an array using recursion
// Recursive sum may receive an empty array

const recursiveSum = (arr, index = 0) => {
	if (index === arr.length) return 0;

	return arr[index] + recursiveSum(arr, index + 1);
};

// All test cases return true
console.log(recursiveSum([]) === 0);
console.log(recursiveSum([0]) === 0);
console.log(recursiveSum([1]) === 1);
console.log(recursiveSum([-1]) === -1);
console.log(recursiveSum([0, 1]) === 1);
console.log(recursiveSum([1, 0]) === 1);
console.log(recursiveSum([1, 2]) === 3);
console.log(recursiveSum([2, 1]) === 3);
console.log(recursiveSum([1, -1]) === 0);
console.log(recursiveSum([0, 0, 0]) === 0);
console.log(recursiveSum([1, 2, 3]) === 6);
console.log(recursiveSum([3, 2, 1]) === 6);
console.log(recursiveSum([0, 0, 0, 0]) === 0);
console.log(recursiveSum([-1, -2, -3]) === -6);
console.log(recursiveSum([1, 2, 3, 4]) === 10);
console.log(recursiveSum([1, 2, 3, 4, 5]) === 15);
console.log(recursiveSum([-1, -2, -3, -4]) === -10);
