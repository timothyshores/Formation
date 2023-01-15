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
Approach 1: Use recursion
Time: O(N)
Space: O(N^2)

📆 PLAN
High-level outline of approach #: 1
· If the length of the string is smaller than the length of the substring return 0
· When the length of the string is longer than the substring
· Look at the first n characters of the string where n is the length of the substring
· If the first n characters of the string is the same as the subsequence
    · Add 1 to count
    · Remove the first n characters from the current string
    · Recursively call the function again with the remaining string.length - n characters
· Else the first n characters of the string are NOT the same as the substring
    · Remove the first characters\ from the current string
    · Recursively call the function again with the remaining string.length - 1 characters


🛠️ IMPLEMENT */
const strCount = (word, sub) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
