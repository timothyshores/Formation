/*
❓ PROMPT
Let's practice recursion by converting functions to and from recursive implementations. Copy the started code in the language of your choice below, then implement the missing functions and test! 

While reading the recursive implementation of *recursiveFactorial* as well as writing *recursiveMax*, consider the following:

1. What is my base case?
2. Which arguments do I need?
3. What do I do at each recursive step?

Example(s)
iterativeFactorial(3) -> 6
iterativeFactorial(4) -> 24

recursiveMax([4, 2, 7] -> 7
recursiveMax([1, -5, 0] -> 1

🔎 EXPLORE
State your assumptions & discoveries:

Create examples & test cases:

iterativeFactorial(1) -> 1
iterativeFactorial(2) -> 2
iterativeFactorial(3) -> 6
iterativeFactorial(4) -> 24
iterativeFactorial(5) -> 140

recursiveMax([]); // null
recursiveMax([1, 2]); // 2
recursiveMax([2, 1]); // 2
recursiveMax([-2, 0]); // 0
recursiveMax([-2, -1]); // -1
recursiveMax([1, 2, 3]); // 3
recursiveMax([3, 2, 1]); // 3

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Iterative factorial
Time: O(n)
Space: O(1)

Approach 2: Recursive max
Time: O(n)
Space: O(n)

📆 PLAN
High-level outline of approach #: 1
· Create a for loop 
· Loop from 1 to n
· Multiply the previous result by the new number
· Return the factorial

High-level outline of approach #: 2
· Look at the first element in the array
· Compare the first element to the second element
· Store the value of the number that is larger
· Look at the third element in the array
· Compare the value of the 3rd element in the array to the current max
· Continue this process until we reach the end of the array
· Return the max value when i is equal to the length of the array


🛠️ IMPLEMENT
Javascript Starter Code
*/

function recursiveFactorial(x) {
	if (x <= 1) return 1;
	else return x * recursiveFactorial(x - 1);
}

function iterativeFactorial(x) {
	let factorial = 1;

	for (let i = 2; i <= x; i++) {
		factorial *= i;
	}

	return factorial;
}

function iterativeMax(arr) {
	let result = arr.length > 0 ? arr[0] : null;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > result) result = arr[i];
	}

	return result;
}

function recursiveMax(arr, curMax = -Infinity, i = 0) {
	if (!arr.length) return null;
	if (i === arr.length) return curMax;
	if (arr[i] > curMax) curMax = arr[i];

	return recursiveMax(arr, curMax, i + 1);
}

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(iterativeFactorial(1) === 1);
console.log(iterativeFactorial(2) === 2);
console.log(iterativeFactorial(3) === 6);
console.log(iterativeFactorial(4) === 24);
console.log(iterativeFactorial(5) === 120);
console.log(iterativeFactorial(6) === 720);
console.log(iterativeFactorial(7) === 5040);
console.log(iterativeFactorial(8) === 40320);

