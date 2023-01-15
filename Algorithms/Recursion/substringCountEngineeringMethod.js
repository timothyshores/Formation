/*

❓ PROMPT
Given a string and a non-empty substring **sub**, compute recursively the number of times that sub appears in the string, without the substrings overlapping.

Example(s)
strCount("catcowcat", "cat") == 2
strCount("catcowcat", "cow") == 1
strCount("catcowcat", "dog") == 0

🔎 EXPLORE
State your assumptions & discoveries:
· Count the number of occurrences that a substring appears within a string using recursion
· If the length of the string is smaller than the length of the substring return 0

Create examples & test cases:

console.log(strCount("", "hi") === 0);
console.log(strCount("", "HI") === 0);
console.log(strCount("I", "HI") === 0);
console.log(strCount("H", "HI") === 0);
console.log(strCount("a", "a") === 1);
console.log(strCount("A", "A") === 1);
console.log(strCount("z", "z") === 1);
console.log(strCount("Z", "Z") === 1);
console.log(strCount("hi", "hi") === 1);
console.log(strCount("HI", "HI") === 1);
console.log(strCount("hihi", "hi") === 2);
console.log(strCount("HIHI", "HI") === 2);
console.log(strCount("hih", "hi") === 1);
console.log(strCount("HII", "HI") === 1);
console.log(strCount("hihellotherehi", "hi") === 2);
console.log(strCount("helloWorldhello", "hello") === 2);
console.log(strCount("IHIHI", "HI") === 2);
console.log(strCount("ihihi", "hi") === 2);
console.log(strCount("HIHIHI", "HI") === 2);


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: O()
Space: O()

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */
const strCount = (word, sub) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
