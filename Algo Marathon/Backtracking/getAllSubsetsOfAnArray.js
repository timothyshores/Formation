/*

Write a function called getAllSubsets that takes in an array and returns all subsets of the array

Examples
getAllSubsets([1, 2, 3]) => [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
getAllSubsets(['A', 'B', 'C]) => [], ['A'], ['B'], ['C], ['A', 'B'], ['A', 'C], ['B', 'C], ['A', 'B', 'C]

*/

const getAllSubsets = (nums) => {
	const subsetsArr = [];

	const helper = (index = 0, currentSubset = []) => {
		// Base case when all numbers have been visited
		if (index === nums.length) {
			subsetsArr.push([...currentSubset]);
			return;
		}

		// Include the current number in the subset
		currentSubset.push(nums[index]);
		helper(index + 1, currentSubset);

		// Exclude the current number in the subset
		currentSubset.pop();
		helper(index + 1, currentSubset);
	};

	helper(0);
	return subsetsArr;
};

// Test cases
console.log(getAllSubsets([1, 2, 3]));
console.log(getAllSubsets(['A', 'B', 'C']));
