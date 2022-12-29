/*

❓ PROMPT
Given a non-negative int n, compute recursively (no loops) the number of occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4 (because 2+1+0+1).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
count8(8) == 1
count8(818) == 2
count8(8818) == 4  (because 2+1+0+1)

🔎 EXPLORE
State your assumptions & discoveries:

Create examples & test cases:
count8(1) == 0
count8(11) == 0
count8(88) == 3
count8(111) == 0
count8(888) == 5
count8(8888) == 7
count8(88188) == 6
count8(881881) == 6
count8(1881881) == 6
count8(881881881) == 9
count8(188188188) == 9

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: 
Space: 

📆 PLAN
High-level outline of approach #: 
*/

// 🛠️ IMPLEMENT
const count8 = (n) => {
};

/* 
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s). 
*/

// All test cases return true