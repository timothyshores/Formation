/*
❓ PROMPT
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while integer division by 10 removes the rightmost digit (126 / 10 is 12). Be aware that some languages require some special handling to do integer division while others do not.

*Python integer division*: x // y
*Javascript integer division*: Math.floor(x / y)

Example(s)
count7(7) == 1
count7(123) == 0
count7(717) == 2

🔎 EXPLORE
State your assumptions & discoveries:
· Want function to return the number of 7s in a given integer input using recursion

Create examples & test cases:

console.log(count7(0) === 0);
console.log(count7(1) === 1);
console.log(count7(11) === 0);
console.log(count7(17) === 1);
console.log(count7(71) === 1);
console.log(count7(77) === 2);
console.log(count7(111) === 0);
console.log(count7(117) === 1);
console.log(count7(171) === 1);
console.log(count7(177) === 2);
console.log(count7(771) === 3);
console.log(count7(777) === 3);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: 
Space: 

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */
const count7 = (n) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
