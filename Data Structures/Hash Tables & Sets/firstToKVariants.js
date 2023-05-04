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

// 3. For each element, iterate through the rest of the array to see if it's repeated k times. If it is, return it. Otherwise, go on to the next element. Walk through how this approach is O(n^2) runtime.

// 4. How many distinct values occur exactly k times?

// 5. How many distinct values occur at minimum k times?

// 6. Find the minium value that occurs at least k times?

// 7. Find the mode. Recall the mode is the most frequently occurring value?
