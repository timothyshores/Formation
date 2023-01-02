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
High-level outline of approach #: 1

Check the start of the string
If the string does NOT start with the substring 
    Remove the first character and call the function again

When the string starts with the substring
Check the end of the string
If the string does NOT end with the substring 
    Remove the last character and call the function again

When the string starts and ends with the substring
Return the length of the current string

If the string's length is less than the length of substring
Return 0

🛠️ IMPLEMENT  */

const strDist = (word, sub) => {
	if (word.length < sub.length) return 0;

	let start = word.substring(0, sub.length);
	let end = word.slice(-sub.length);

	if (start !== sub) return strDist(word.substring(1), sub);

	if (end !== sub) return strDist(word.substring(0, word.length - 1), sub);

	if (start === sub && end === sub) return word.length;
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(strDist("", "z") === 0);
console.log(strDist("x", "z") === 0);
console.log(strDist("z", "z") === 1);
console.log(strDist("xyx", "z") === 0);
console.log(strDist("xyx", "y") === 1);
console.log(strDist("xyx", "x") === 3);
console.log(strDist("catcowcat", "cow") === 3);
console.log(strDist("catcowcat", "cat") === 9);
console.log(strDist("hiHellohihihi", "o") === 1);
console.log(strDist("ooowhwhwooo", "whw") === 5);
console.log(strDist("hiHellohihihi", "ll") === 2);
console.log(strDist("hiHellohihihi", "hi") === 13);
console.log(strDist("hiHellohihihi", "hih") === 5);
console.log(strDist("cccatcowcatxx", "cat") === 9);
console.log(strDist("abccatcowcatcatxyz", "cat") === 12);
