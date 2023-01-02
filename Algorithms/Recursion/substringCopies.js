/*

❓ PROMPT
Given a string and a non-empty substring **sub**, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.

Example(s)
strCopies("catcowcat", "cat", 2) == True
strCopies("catcowcat", "cow", 2) == False
strCopies("catcowcat", "cow", 1) == True

🔎 EXPLORE
State your assumptions & discoveries:
The function will count the number of times that a substring appears within a given string
If the substring appears n number of times or more return true
Else return false

Create examples & test cases:

console.log(strCopies("iiijjj", "x", 0));
console.log(strCopies("iiijjj", "i", 3));
console.log(strCopies("iiijjj", "ii", 2));
console.log(strCopies("iiiiij", "iii", 3));
console.log(strCopies("catcowcat", "cow", 1));
console.log(strCopies("ijiiiiij", "iiii", 2));
console.log(strCopies("catcowcat", "cat", 2));
console.log(strCopies("dogcatdogcat", "dog", 2));

console.log(!strCopies("iiijjj", "x", 3));
console.log(!strCopies("iiijjj", "i", 4));
console.log(!strCopies("iiijjj", "ii", 3));
console.log(!strCopies("iiiiij", "iii", 4));
console.log(!strCopies("catcowcat", "cow", 2));
console.log(!strCopies("ijiiiiij", "iiii", 3));


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion
Time: O(n)
Space: O(n)

📆 PLAN
High-level outline of approach 1:
Initialize a count variable and set it to zero
Get the length of the substring
Call .substring(0, substring.length) on the string
Compare if the .substring method is equal to substring
If it is then we add one to the count
Else add zero
If the count is equal to n we could end the function early and return true
Remove the first character of the function 
Use the built in .substring(1) method
Recursively call the function again with the rest of the characters in the string
If the string is 0 characters then we return false

🛠️ IMPLEMENT
*/

const strCopies = (word, sub, n) => {
	if (word === "") return false;
	if (n === 0) return true;

	if (word.substring(0, sub.length) === sub)
		return strCopies(word.substring(1), sub, n - 1);

	return strCopies(word.substring(1), sub, n);
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(strCopies("iiijjj", "x", 0));
console.log(strCopies("iiijjj", "i", 3));
console.log(strCopies("iiijjj", "ii", 2));
console.log(strCopies("iiiiij", "iii", 3));
console.log(strCopies("catcowcat", "cow", 1));
console.log(strCopies("ijiiiiij", "iiii", 2));
console.log(strCopies("catcowcat", "cat", 2));
console.log(strCopies("dogcatdogcat", "dog", 2));

console.log(!strCopies("iiijjj", "x", 3));
console.log(!strCopies("iiijjj", "i", 4));
console.log(!strCopies("iiijjj", "ii", 3));
console.log(!strCopies("iiiiij", "iii", 4));
console.log(!strCopies("catcowcat", "cow", 2));
console.log(!strCopies("ijiiiiij", "iiii", 3));
