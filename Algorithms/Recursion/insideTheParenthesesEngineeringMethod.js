/*

❓ PROMPT
Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"

🔎 EXPLORE
State your assumptions & discoveries:
· We want to keep everything inside of the parenthesis including the opening and close parenthesis

Create examples & test cases:

console.log(parenBit("()") === "()");
console.log(parenBit("()1") === "()");
console.log(parenBit("1()") === "()");
console.log(parenBit("(x)") === "(x)");
console.log(parenBit("1()1") === "()");
console.log(parenBit("(xy)1") === "(xy)");
console.log(parenBit("(abc)") === "(abc)");
console.log(parenBit("(abc)x") === "(abc)");
console.log(parenBit("ab(ab)ab") === "(ab)");
console.log(parenBit("ab(ab)ab") === "(ab)");
console.log(parenBit("(abc)xyz") === "(abc)");
console.log(parenBit("x(hello)") === "(hello)");
console.log(parenBit("xyz(abc)123") === "(abc)");
console.log(parenBit("res (ipsa) loquitor") === "(ipsa)");
console.log(parenBit("not really (possible)") === "(possible)");
console.log(parenBit("hello(not really)there") === "(not really)");

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion
Time: O(N)
Space: O(N^2)

📆 PLAN
High-level outline of approach #: 1
· Check the first character of the string
· If the first character of the string is an opening parenthesis "("
    · Include this character in our results string
    · Call the function again excluding the first character
· Else the first character of the string is any other character besides "("
    · Ignore this character in our results string
    · Call the function again excluding the first character
· When we get to the closing parenthesis ")" we add that to the results string and then return

🛠️ IMPLEMENT */

const parenBit = (word) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
