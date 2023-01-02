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
Approach 1: 
Time: O()
Space: O()

📆 PLAN
High-level outline of approach 1:

🛠️ IMPLEMENT
*/

const strCopies = (word, sub, n) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
