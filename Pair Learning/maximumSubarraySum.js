/*

Kadane’s Algorithm

Given an array of integers, return maximum subarray sum. A subarray is any contiguous set of numbers. If the input array has at least one element, then the shortest subarray should include at least one element.

EXAMPLE(S)
[2, 2, -3, 6, -10, 4] => 7 because of the subarray [2, 2, -3, 6]

FUNCTION SIGNATURE
func maxSubarraySum(input: [Int]) -> Int

*/

const maxSubarraySum = (nums) => {
	let highestSum = -Infinity;
	let currentSum = 0;

	for (const num of nums) {
		currentSum = Math.max(num, currentSum + num);
		highestSum = Math.max(currentSum, highestSum);
	}

	return highestSum;
};
