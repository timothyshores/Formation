/*

Dutch National Flag

The Dutch National Flag consists of 3 bands of colors which we will represent as 3 numbers in an array. Given an array of 0s, 1s and 2s, sort them in-place.

Source: https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

EXAMPLE(S)
Input: [1,1,1,0,0,2,2,0,1,0,2,2]
Output: [0,0,0,0,1,1,1,2,2,2,2]

FUNCTION SIGNATURE
def sortColors(nums: list[int]) -> list[int]:

Engineering Method Notes

Approaches 
1. Brute force nested for 

3 pointer approach - O(N) time, O(1) space
0 - start at index 0, for every 0 that's added increment pointer index
1 - Is current pointer
2 - start at input.length - 1 index, for every 2 that's added decrement pointer index

initialize 3 pointers
left start at index 0
right starts at nums.length - 1
current starts at 0

Look at first element
If it's 1 do nothing
If it's 0 do an in place swap with current index and the left pointer index
- Increment the left pointer index
If it's 2 do an in place swap with current index and the right pointer index
- Decrement the right pointer index
Once we're at the end then nums will be sorted

*/

const sortColors = (nums) => {
	let currentIndex = 0,
		left = 0;
	let right = nums.length - 1;

	while (currentIndex <= right) {
		const currentElement = nums[currentIndex];

		if (currentElement == 0) {
			[nums[left], nums[currentIndex]] = [nums[currentIndex], nums[left]];
			left++;
			currentIndex++;
		} else if (currentElement == 1) {
			currentIndex++;
		} else if (currentElement == 2) {
			[nums[right], nums[currentIndex]] = [nums[currentIndex], nums[right]];
			right--;
		}
	}

	return nums;
};
