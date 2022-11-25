// Write a function that determines if an array contains a pair that adds up to a value, k
// The array is sorted ahead of time.

//Expected Runtime
// Expected Runtime: O(N) - two-pointer approach
// Expected space complexity: O(1) to store a constant number of variables

const sumToK = (arr, k) => {
	if (arr.length < 2) return false;

	let sum;
	let lowPointer = 0;
	let highPointer = arr.length - 1;

	while (lowPointer < highPointer) {
		sum = arr[lowPointer] + arr[highPointer];

		if (sum === k) {
			return true;
		}
		if (sum < k) {
			lowPointer++;
		}
		if (sum > k) {
			highPointer--;
		}
	}

	return false;
};

console.log(sumToK([5], 5) === false); // true
console.log(sumToK([4], 5) === false); // true
console.log(sumToK([], 15) === false); // true
console.log(sumToK([2, 4], 6) === true); // true
console.log(sumToK([4, 4], 8) === true); // true
console.log(sumToK([2, 4], 5) === false); // true
console.log(sumToK([4, 4], 7) === false); // true
console.log(sumToK([2, 2, 5, 8], 4) === true); // true
console.log(sumToK([4, 4, 4, 4], 8) === true); // true
console.log(sumToK([1, 5, 8, 10, 13, 18], 15) === true); // true
console.log(sumToK([1, 5, 8, 10, 13, 18], 12) === false); // true
