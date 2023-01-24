/*

❓ PROMPT
Given an array, write a recursive function to find the index of the minimum element in an array. If there's a tie-breaker, return the first occurrence.

Example(s)
findMinIndex([12, 1234, 45, 67, 1]) == 4
findMinIndex([10, 20, 30]) == 0
findMinIndex([8, 6, 7, 5, 3, 7]) == 4

🔎 EXPLORE
State your assumptions & discoveries:
· Return the index of the element with the lowest integer value in the input array 
· Array will always be at least 1 element to avoid having to throw an exception.
· Array may be sorted or unsorted

Create examples & test cases:

console.log(findMinIndex([1]) === 0);
console.log(findMinIndex([2]) === 0);
console.log(findMinIndex([-1]) === 0);
console.log(findMinIndex([10]) === 0);
console.log(findMinIndex([100]) === 0);
console.log(findMinIndex([15, 11]) === 1);
console.log(findMinIndex([0, 2, 1]) === 0);
console.log(findMinIndex([3, 0, 1]) === 1);
console.log(findMinIndex([3, 2, 1]) === 2);
console.log(findMinIndex([10, 2, 30]) === 1);
console.log(findMinIndex([10, 20, 3]) === 2);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([20, 10, 30]) === 1);
console.log(findMinIndex([30, 20, 10]) === 2);
console.log(findMinIndex([10, 20, 30, 10]) === 0);
console.log(findMinIndex([10, 10, 10, 10]) === 0);
console.log(findMinIndex([-10, -5, -3, -30]) === 3);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) === 4);
console.log(findMinIndex([15, 11, 12, 13, 14]) === 1);
console.log(findMinIndex([12, 1234, 45, 67, 1]) === 4);
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) === 3);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion and a helper function that take in an integer to track current index
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Create a variable called minIndex and set to zero
· Create a helper function that receives an index as a parameter
    · Base case: array is a single element or all elements have been visited
        · Break out of the helper function using the return keyword
    · Recursive case: when all elements in the array have not been visited
        · Compare the value of the current element to minValue
        · If the current element is smaller than minValue
            · Update minValue to the current value
            · Update minIndex to the current index
        · Call the helper function again passing in index + 1 
· Return minIndex

🛠️ IMPLEMENT */
const findMinIndex = (arr) => {
    let minIndex = 0;

	const helper = (index = 1) => {
		if (index === arr.length) return;
		if (arr[index] < arr[minIndex]) minIndex = index;
        helper(index + 1);
	};

	helper();
	return minIndex;
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(findMinIndex([1]) === 0);
console.log(findMinIndex([2]) === 0);
console.log(findMinIndex([-1]) === 0);
console.log(findMinIndex([10]) === 0);
console.log(findMinIndex([100]) === 0);
console.log(findMinIndex([15, 11]) === 1);
console.log(findMinIndex([0, 2, 1]) === 0);
console.log(findMinIndex([3, 0, 1]) === 1);
console.log(findMinIndex([3, 2, 1]) === 2);
console.log(findMinIndex([10, 2, 30]) === 1);
console.log(findMinIndex([10, 20, 3]) === 2);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([20, 10, 30]) === 1);
console.log(findMinIndex([30, 20, 10]) === 2);
console.log(findMinIndex([10, 20, 30, 10]) === 0);
console.log(findMinIndex([10, 10, 10, 10]) === 0);
console.log(findMinIndex([-10, -5, -3, -30]) === 3);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) === 4);
console.log(findMinIndex([15, 11, 12, 13, 14]) === 1);
console.log(findMinIndex([12, 1234, 45, 67, 1]) === 4);
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) === 3);
