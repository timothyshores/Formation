// Recursive sum returns the sum of an array using recursion
// Recursive sum may receive an empty array

const recursiveSum = (arr, index = 0) => {
	if (index === arr.length) return 0;

	return arr[index] + recursiveSum(arr, index + 1);
};

