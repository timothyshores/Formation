/*

❓ PROMPT
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
sumDigits(12) == 3
sumDigits(49) == 13
sumDigits(126) == 9

🔎 EXPLORE
State your assumptions & discoveries:
· Want to compute and return the sum of all digits given an integer

Create examples & test cases:
console.log(sumDigits(0) === 0);
console.log(sumDigits(1) === 1);
console.log(sumDigits(2) === 2);
console.log(sumDigits(3) === 3);
console.log(sumDigits(4) === 4);
console.log(sumDigits(5) === 5);
console.log(sumDigits(10) === 1);
console.log(sumDigits(11) === 2);
console.log(sumDigits(12) === 3);
console.log(sumDigits(21) === 3);
console.log(sumDigits(13) === 4);
console.log(sumDigits(31) === 4);
console.log(sumDigits(14) === 5);
console.log(sumDigits(41) === 5);
console.log(sumDigits(111) === 3);
console.log(sumDigits(123) === 6);
console.log(sumDigits(1234) === 10);
console.log(sumDigits(12345) === 15);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Take the right most digit and add that to the sum of the remaining digits
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Base case is when the input n is a single digit number from 0 to 9 return n
· Recursive case get the right most number and call the function recursively with the remaining numbers

🛠️ IMPLEMENT */
const sumDigits = (n) => {
	if (n < 10) return n;
	return (n % 10) + sumDigits(Math.floor(n / 10));
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(sumDigits(0) === 0);
console.log(sumDigits(1) === 1);
console.log(sumDigits(2) === 2);
console.log(sumDigits(3) === 3);
console.log(sumDigits(4) === 4);
console.log(sumDigits(5) === 5);
console.log(sumDigits(10) === 1);
console.log(sumDigits(11) === 2);
console.log(sumDigits(12) === 3);
console.log(sumDigits(21) === 3);
console.log(sumDigits(13) === 4);
console.log(sumDigits(31) === 4);
console.log(sumDigits(14) === 5);
console.log(sumDigits(41) === 5);
console.log(sumDigits(111) === 3);
console.log(sumDigits(123) === 6);
console.log(sumDigits(1234) === 10);
console.log(sumDigits(12345) === 15);
