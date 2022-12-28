/*
'''
❓ PROMPT
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while integer division by 10 removes the rightmost digit Math.floor(126 / 10) returns 12. 

Example(s)
count7(7) == 1
count7(123) == 0
count7(717) == 2

🔎 EXPLORE
State your assumptions & discoveries:

Create examples & test cases:

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion
Time: O(n)
Space: O(n)

📆 PLAN
High-level outline of approach #: 
    Implement using recursion
    The base case is where n is a single digit number e.g. n < 10
    When n is two or more digits 
        Check the right most number
            If the number is 7 then we add 1 to the count
            Else the number is NOT seven so we add 0 or don't count the number
        Call the function again but don't include the right most number
            Use Math.floor(n / 10) to remove the right most number
*/

// 🛠️ IMPLEMENT
const count7 = (n) => {
	if (n === 0) return 0;

	if (n % 10 === 7) return 1 + count7(Math.floor(n / 10));

	return count7(Math.floor(n / 10));
};

// 🧪 VERIFY - All test cases return true
console.log(count7(0) === 0);
console.log(count7(1) === 0);
console.log(count7(5) === 0);
console.log(count7(7) === 1);
console.log(count7(07) === 1);
console.log(count7(17) === 1);
console.log(count7(70) === 1);
console.log(count7(71) === 1);
console.log(count7(77) === 2);
console.log(count7(123) === 0);
console.log(count7(007) === 1);
console.log(count7(717) === 2);
console.log(count7(707) === 2);
console.log(count7(770) === 2);
console.log(count7(770) === 2);
console.log(count7(777) === 3);
console.log(count7(7123) === 1);
console.log(count7(99999) === 0);
console.log(count7(99799) === 1);
console.log(count7(47571) === 2);
console.log(count7(771237) === 3);
console.log(count7(771737) === 4);
console.log(count7(777777) === 6);
console.log(count7(70701277) === 4);
console.log(count7(777576197) === 5);
