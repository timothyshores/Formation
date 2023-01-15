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

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: O()
Space: O()

Approach 2: 
Time: O()
Space: O()

📆 PLAN

🛠️ IMPLEMENT
Javascript Starter Code
*/

function recursiveFactorial(x) {
	if (x <= 1) return 1;
	else return x * recursiveFactorial(x - 1);
}

function iterativeFactorial(x) {}

function iterativeMax(arr) {
	let result = arr.length > 0 ? arr[0] : null;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > result) result = arr[i];
	}

	return result;
}

function recursiveMax(arr, curMax = -Infinity, i = 0) {}

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
