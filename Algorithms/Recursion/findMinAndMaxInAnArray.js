/*
'''
❓ PROMPT
Given an array, write 2 recursive functions to find the minimum and maximum element in an array. You may use the *min(a,b)* and *max(a,b)* functions to shorthand picking the minimum and maximum between 2 values.

Example(s)
findMin([12, 1234, 45, 67, 1]) == 1
findMin([10, 20, 30]) == 10
findMin([8, 6, 7, 5, 3, 7]) == 3

findMax([12, 1234, 45, 67, 1]) == 1234
findMax([10, 20, 30]) == 30
findMax([8, 6, 7, 5, 3, 7]) == 8

🔎 EXPLORE
State your assumptions & discoveries:
· We're looking to find the minimum and maximum value contained in an array of integers
· The input array will contain at least one element
· The array may contain positive integers, negative integers, zero and may be either sorted or unsorted
· Must use recursion, no built in functions or iteration 

Create examples & test cases:
console.log(findMin([0]) === 0);
console.log(findMin([1]) === 1);
console.log(findMin([-1]) === -1);
console.log(findMin([1, 1]) === 1);
console.log(findMin([1, 2]) === 1);
console.log(findMin([2, 1]) === 1);
console.log(findMin([1, -1]) === -1);
console.log(findMin([-1, 1]) === -1);
console.log(findMin([-1, -1]) === -1);
console.log(findMin([1, 1, 1]) === 1);
console.log(findMin([1, 2, 3]) === 1);
console.log(findMin([3, 2, 1]) === 1);
console.log(findMin([2, 1, 3]) === 1);

console.log(findMax([0]) === 0);
console.log(findMax([1]) === 1);
console.log(findMax([-1]) === -1);
console.log(findMax([1, 1]) === 1);
console.log(findMax([1, 2]) === 2);
console.log(findMax([2, 1]) === 2);
console.log(findMax([1, -1]) === 1);
console.log(findMax([-1, 1]) === 1);
console.log(findMax([-1, -1]) === -1);
console.log(findMax([1, 1, 1]) === 1);
console.log(findMax([1, 2, 3]) === 3);
console.log(findMax([3, 2, 1]) === 3);
console.log(findMax([2, 1, 3]) === 3);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Create index based helper function and call the helper function recursively
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Create a global variable to store the minimum or maximum value respectively
· Set min and max to the first value in the array
· If there's a second element in the array we'll compare the two values
    · In findMin if the current value is less than the current minimum value
        · Set min to the value to the current value
    · In findMax if the current value is greater than the current minimum value
        · Set max to the value to the current value

🛠️ IMPLEMENT */
const findMin = (arr) => {
	let min = Infinity;

	const helper = (index = 0) => {
		if (index === arr.length) return;
		if (arr[index] < min) {
			min = arr[index];
		}
		helper(index + 1);
	};

	helper();
	return min;
};

const findMax = (arr) => {
	let max = -Infinity;

	const helper = (index = 0) => {
		if (index === arr.length) return;
		if (arr[index] > max) {
			max = arr[index];
		}
		helper(index + 1);
	};

	helper();

	return max;
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
