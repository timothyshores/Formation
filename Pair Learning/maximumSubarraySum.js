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

// All tests return true
console.log(maxSubarraySum([0]) === 0);
console.log(maxSubarraySum([1, 2, 3]) === 6);
console.log(maxSubarraySum([-1, -2, -3]) === -1);
console.log(maxSubarraySum([1, 2, 3, 4, 5]) === 15); 
console.log(maxSubarraySum([5, 4, 3, 2, 1]) === 15); 
console.log(maxSubarraySum([5, -2, 4, 8, 6]) === 21); // 
console.log(maxSubarraySum([-2, -3, -4, -1, -2]) === -1); 
console.log(maxSubarraySum([2, 2, -3, 6, -10, 4]) === 7);
console.log(maxSubarraySum([2, -1, 2, 3, -4, 1, 2]) === 6); 
console.log(maxSubarraySum([1, -2, 3, 4, -1, 2, 5]) === 12);
console.log(maxSubarraySum([-1, 2, 4, -3, 5, 2, -5, 2]) === 10); 
console.log(maxSubarraySum([10, -10, 5, -5, 3, -3, 1, -1]) === 10);
