/*
❓ PROMPT
Given a string and a non-empty substring *sub*, compute recursively the size of the largest substring which starts and ends with the given *sub* string and return its length, including the length of the substrings. When *sub* is multiple characters, they may overlap with each other and share characters.

Example(s)
strDist("catcowcat", "cat") == 9
strDist("catcowcat", "cow") == 3
strDist("cccatcowcatxx", "cat") == 9
strDist("ooowhwhwooo", "whw") == 5

🔎 EXPLORE
State your assumptions & discoveries: 
Need to remove characters from both the start and end of the string

Create examples & test cases:

console.log(strDist("", "z") === 0)
console.log(strDist("x", "z") === 0)
console.log(strDist("z", "z") === 1)
console.log(strDist("xyx", "z") === 0)
console.log(strDist("xyx", "y") === 1)
console.log(strDist("xyx", "x") === 3)
console.log(strDist("catcowcat", "cow") === 3)
console.log(strDist("catcowcat", "cat") === 9)
console.log(strDist("hiHellohihihi", "o") === 1)
console.log(strDist("ooowhwhwooo", "whw") === 5)
console.log(strDist("hiHellohihihi", "ll") === 2)
console.log(strDist("hiHellohihihi", "hi") === 13)
console.log(strDist("hiHellohihihi", "hih") === 5)
console.log(strDist("cccatcowcatxx", "cat") === 9)
console.log(strDist("abccatcowcatcatxyz", "cat") === 12)

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion
Time: O(n)
Space: O(n)

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT  */

const strDist = (word, sub) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
