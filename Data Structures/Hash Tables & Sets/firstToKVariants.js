/*

Coding Drills: First To K Variations

In this variation session, we will solve the same problem 3 different ways. The basic problem is:
Given an array of positive integers, find the first element that occurs k number of times. If no element occurs k times, return -1. You may assume k is greater than 0.

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1

1. The standard solution is to use a dictionary to keep track of the number of repetitions. Early return when you find an element that hits k repeats.

*/

const solution1 = (arr, k) => {
	const frequencyCounter = {};

	for (const num of arr) {
		frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
		if (frequencyCounter[num] === k) return num;
	}

	return -1;
};

console.log(solution1([1, 2, 2, 3, 3], 2)); // 2
console.log(solution1([], 1)); // -1

// 2. The original solution, but do not return early. Build up the full dictionary of counts. Iterate through the array again and return the first one whose count is greater than or equal to k. Discuss how this does not change the overall runtime or space complexity.

const solution2 = (arr, k) => {
	const frequencyCounter = {};

	for (const num of arr) {
		frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
	}

	for (const num of arr) {
		if (num >= k) return num;
	}

	return -1;
};

// 3. For each element, iterate through the rest of the array to see if it's repeated k times. If it is, return it. Otherwise, go on to the next element. Walk through how this approach is O(n^2) runtime.

const solution3 = (arr, k) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let count = 1;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) count++;
			if (count === k) return arr[i];
		}
	}

	return -1;
};

// 4. How many distinct values occur exactly k times?

const solution4 = (arr, k) => {
	const frequencyCounter = {};
	for (const num of arr) {
		frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
	}
	return Object.values(frequencyCounter).filter((key) => key === k).length;
};

console.log(solution4([], 2)); // 0
console.log(solution4([1, 2, 3], 2)); // 0
console.log(solution4([1, 2, 2, 3], 2)); // 1
console.log(solution4([1, 1, 2, 3], 2)); // 1
console.log(solution4([1, 1, 2, 2, 3], 2)); // 2
console.log(solution4([1, 2, 3, 4, 5], 1)); // 5
console.log(solution4([1, 2, 2, 3, 3], 2)); // 2
console.log(solution4([1, 2, 2, 3, 3, 3], 3)); // 1

// 5. How many distinct values occur at minimum k times?

const solution5 = (arr, k) => {
	const frequencyCounter = {};
	for (const num of arr) {
		frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
	}
	return Object.values(frequencyCounter).filter((key) => key >= k).length;
};

console.log(solution5([], 2)); //  0
console.log(solution5([1, 2, 2, 3, 3, 3], 3)); //  1
console.log(solution5([1, 2, 2, 3, 3, 4, 4, 4], 2)); //  3
console.log(solution5([1, 2, 3, 4, 5, 5, 5, 1, 1], 1)); //  5

// 6. Find the minium value that occurs at least k times?

const solution6 = (arr, k) => {
	const frequencyCounter = {};
	let minValue = Infinity;

	for (const num of arr) {
		frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
	}

	for ([value, frequency] of Object.entries(frequencyCounter)) {
		if (frequency >= k && value < minValue) {
			minValue = value;
		}
	}

	return minValue === Infinity ? -1 : minValue;
};

console.log(solution6([], 2)); //  -1
console.log(solution6([1, 2, 3], 2)); // -1
console.log(solution6([1, 2, 2, 3], 2)); // 2
console.log(solution6([1, 1, 2, 3], 2)); // 1
console.log(solution6([1, 1, 2, 2, 3], 2)); // 1
console.log(solution6([1, 2, 3, 4, 5], 1)); // 1
console.log(solution6([1, 2, 2, 3, 3], 2)); // 2
console.log(solution6([1, 2, 2, 3, 3, 3], 3)); // 1
console.log(solution6([1, 2, 2, 3, 3, 3], 3)); //  3
console.log(solution6([1, 2, 2, 3, 3, 4, 4, 4], 2)); //  2
console.log(solution6([1, 2, 3, 4, 5, 5, 5, 1, 1], 1)); //  1

// 7. Find the mode. Recall the mode is the most frequently occurring value?

const solution7 = (arr, k) => {
	const frequencyCounter = {};
	let maxFrequency = 0;
	let currentMode;

	for (const num of arr) {
		frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
	}

	for ([value, frequency] of Object.entries(frequencyCounter)) {
		if (frequency >= maxFrequency) {
			maxFrequency = frequency;
			currentMode = value;
		}
	}

	return maxFrequency > 0 ? currentMode : -1;
};

console.log(solution7([], 2)); //  -1
console.log(solution7([1, 2, 3], 2)); // 3
console.log(solution7([1, 2, 2, 3], 2)); // 2
console.log(solution7([1, 1, 2, 3], 2)); // 1
console.log(solution7([1, 1, 2, 2, 3], 2)); // 2
console.log(solution7([1, 2, 3, 4, 5], 1)); // 5
console.log(solution7([1, 2, 2, 3, 3], 2)); // 3
console.log(solution7([1, 2, 2, 3, 3, 3], 3)); // 3
console.log(solution7([1, 2, 2, 3, 3, 3], 3)); //  3
console.log(solution7([1, 2, 2, 3, 3, 4, 4, 4], 2)); //  3
console.log(solution7([1, 2, 3, 4, 5, 5, 5, 1, 1], 1)); //  5
