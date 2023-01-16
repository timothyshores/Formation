/*

❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1

🔎 EXPLORE
State your assumptions & discoveries:
· We want to count the number of times that we find "aba" in the input string
    · Where the first and third character are the same and separated by a middle second character

Create examples & test cases:

console.log(countSkippedPairs("") === 0);
console.log(countSkippedPairs("") === 0);
console.log(countSkippedPairs("a") === 0);
console.log(countSkippedPairs("A") === 0);
console.log(countSkippedPairs("1") === 0);
console.log(countSkippedPairs("aa") === 0);
console.log(countSkippedPairs("ab") === 0);
console.log(countSkippedPairs("AB") === 0);
console.log(countSkippedPairs("12") === 0);
console.log(countSkippedPairs("hi") === 0);
console.log(countSkippedPairs("aba") === 1);
console.log(countSkippedPairs("aaa") === 1);
console.log(countSkippedPairs("ABA") === 1);
console.log(countSkippedPairs("121") === 1);
console.log(countSkippedPairs("axa") === 1);
console.log(countSkippedPairs("ABAb") === 1);
console.log(countSkippedPairs("abaB") === 1);
console.log(countSkippedPairs("ABAB") === 2);
console.log(countSkippedPairs("abab") === 2);
console.log(countSkippedPairs("1212") === 2);
console.log(countSkippedPairs("axax") === 2);
console.log(countSkippedPairs("axbx") === 1);
console.log(countSkippedPairs("hihih") === 3);
console.log(countSkippedPairs("ihihhh") === 3);
console.log(countSkippedPairs("ihjxhh") === 0);
console.log(countSkippedPairs("aaaaaaaa") === 6);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: O()
Space: O()

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT
*/

const countSkippedPairs = (word) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
