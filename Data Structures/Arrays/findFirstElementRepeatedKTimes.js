// Q. Given an array of positive integers, find the first element that occurs k number of times. If no element occurs k times, return -1, and you may assume k is greater than 0.

// Examples:
// • Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
// • Given an array: [], k: 1 // returns -1

function firstKTimes(array, k) {
	const frequencyCounter = {};

	for (const number of array) {
		frequencyCounter[number] = (frequencyCounter[number] || 0) + 1;
		if (frequencyCounter[number] === k) return number;
	}

	return -1;
}

// Test Cases
console.log(firstKTimes([], 1)); // -1
console.log(firstKTimes([1, 2, 3, 3], 2)); // 3
console.log(firstKTimes([1, 1, 1, 2, 3], 3)); // 1
console.log(firstKTimes([1, 2, 2, 3, 3], 2)); // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)); // -1
console.log(firstKTimes([1, 2, 2, 2, 3, 3], 3)); // 2
console.log(firstKTimes([1, 2, 2, 3, 3, 3], 3)); // 3
