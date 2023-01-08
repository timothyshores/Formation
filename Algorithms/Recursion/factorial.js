/*
❓ PROMPT
In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. Compute the result recursively (without loops).

Example(s)
factorial(3) == 6
factorial(5) == 120

🔎 EXPLORE
State your assumptions & discoveries:
N must be a positive non-zero integer

Create examples & test cases:
console.log(factorial(1) === 1); // true
console.log(factorial(2) === 2); // true
console.log(factorial(3) === 6); // true
console.log(factorial(4) === 24); // true

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion
Time: O(n)
Space: O(n)

📆 PLAN
High-level outline of approach #: 1
Return the current integer n multiplied by the next smaller integer
E.g. if we want to find the factorial of 5 we'd multiply 5 * 4 * 3 * ...
We'll stop at the number 1 and return 1 which will be our base case

🛠️ IMPLEMENT */
const factorial = (n) => {
	if (n === 1) return 1;
	return n * factorial(n - 1);
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s) */

// All Test Cases Return True
console.log(factorial(1) === 1); // true
console.log(factorial(2) === 2); // true
console.log(factorial(3) === 6); // true
console.log(factorial(4) === 24); // true
console.log(factorial(5) === 120); // true
console.log(factorial(6) === 720); // true
console.log(factorial(7) === 5040); // true
console.log(factorial(8) === 40320); // true
console.log(factorial(9) === 362880); // true
