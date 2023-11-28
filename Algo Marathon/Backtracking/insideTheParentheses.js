/*

❓ PROMPT
Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"

Notes
- The input can be be an empty string 
- The parentheses can either contain or not contain characters in the parenthesis

🔎 EXPLORE
List your assumptions & discoveries:
- Want to return the substring that is the innermost () and the characters in-between the parentheses

Insightful & revealing test cases:

parenBit("()") == "()"
parenBit("(x)") == "(x)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"
parenBit("x(hello)y") == "(hello)"
parenBit("x(hello)yx") == "(hello)"
parenBit("x(hello)xy") == "(hello)"
parenBit("yx(hello)y") == "(hello)"
parenBit("xxxx(hello)") == "(hello)"
parenBit("(hello)yyyyy") == "(hello)"

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Use a helper function and the .substring built in String method
Time: O(N)
Space: O(N) where N is the length of the string

📆 PLAN
Outline of algorithm #: 1

- Base Case
    - The first character is '(' and the last character is ')'
    - Return the current string
- Recursive Case
    - If the first character is NOT '(' then call the function recursively excluding the first character
    - If the last character is NOT ')' then call the function recursively excluding the last character

🛠️ IMPLEMENT
function parenBit(word) {
def parenBit(word: str) -> str:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

const slicingNoHelper = (word) => {
	const firstCharacter = word[0];
	const lastCharacter = word[word.length - 1];

	if (firstCharacter === "(" && lastCharacter === ")") return word;
	if (firstCharacter !== "(") return slicingNoHelper(word.substring(1));
	if (lastCharacter !== ")")
		return slicingNoHelper(word.substring(0, word.length - 1));
};

const slicingWithHelper = (word) => {
	const helper = (str) => {
		const firstCharacter = str[0];
		const lastCharacter = str[str.length - 1];
		if (firstCharacter === "(" && lastCharacter === ")") return str;
		if (firstCharacter !== "(") return helper(str.substring(1));
		if (lastCharacter !== ")") return helper(str.substring(0, str.length - 1));
	};

	return helper(word);
};

const indicesNoHelper = (word, start = 0, end = word.length - 1) => {
	if (word[start] === "(" && word[end] === ")")
		return word.substring(start, end + 1);
	if (word[start] !== "(") return indicesNoHelper(word, start + 1, end);
	if (word[end] !== ")") return indicesNoHelper(word, start, end - 1);
};

const indicesWithHelper = (word) => {
	const helper = (start, end) => {
		if (word[start] === "(" && word[end] === ")")
			return word.substring(start, end + 1);
		if (word[start] !== "(") return helper(start + 1, end);
		if (word[end] !== ")") return helper(start, end - 1);
	};

	return helper(0, word.length - 1);
};

// All test cases return true

// // slicingNoHelper test cases
console.log(slicingNoHelper("xyz(abc)123") === "(abc)");
console.log(slicingNoHelper("x(hello)") === "(hello)");
console.log(slicingNoHelper("(xy)1") === "(xy)");
console.log(slicingNoHelper("not really (possible)") === "(possible)");
console.log(slicingNoHelper("(abc)") === "(abc)");
console.log(slicingNoHelper("(abc)xyz") === "(abc)");
console.log(slicingNoHelper("(abc)x") === "(abc)");
console.log(slicingNoHelper("(x)") === "(x)");
console.log(slicingNoHelper("()") === "()");
console.log(slicingNoHelper("res (ipsa) loquitor") === "(ipsa)");
console.log(slicingNoHelper("hello(not really)there") === "(not really)");
console.log(slicingNoHelper("ab(ab)ab") === "(ab)");

// slicingWithHelper test cases
console.log(slicingWithHelper("xyz(abc)123") === "(abc)");
console.log(slicingWithHelper("x(hello)") === "(hello)");
console.log(slicingWithHelper("(xy)1") === "(xy)");
console.log(slicingWithHelper("not really (possible)") === "(possible)");
console.log(slicingWithHelper("(abc)") === "(abc)");
console.log(slicingWithHelper("(abc)xyz") === "(abc)");
console.log(slicingWithHelper("(abc)x") === "(abc)");
console.log(slicingWithHelper("(x)") === "(x)");
console.log(slicingWithHelper("()") === "()");
console.log(slicingWithHelper("res (ipsa) loquitor") === "(ipsa)");
console.log(slicingWithHelper("hello(not really)there") === "(not really)");
console.log(slicingWithHelper("ab(ab)ab") === "(ab)");

// indicesNoHelper test cases
console.log(indicesNoHelper("xyz(abc)123") === "(abc)");
console.log(indicesNoHelper("x(hello)") === "(hello)");
console.log(indicesNoHelper("(xy)1") === "(xy)");
console.log(indicesNoHelper("not really (possible)") === "(possible)");
console.log(indicesNoHelper("(abc)") === "(abc)");
console.log(indicesNoHelper("(abc)xyz") === "(abc)");
console.log(indicesNoHelper("(abc)x") === "(abc)");
console.log(indicesNoHelper("(x)") === "(x)");
console.log(indicesNoHelper("()") === "()");
console.log(indicesNoHelper("res (ipsa) loquitor") === "(ipsa)");
console.log(indicesNoHelper("hello(not really)there") === "(not really)");
console.log(indicesNoHelper("ab(ab)ab") === "(ab)");

// indicesWithHelper test cases
console.log(indicesWithHelper("xyz(abc)123") === "(abc)");
console.log(indicesWithHelper("x(hello)") === "(hello)");
console.log(indicesWithHelper("(xy)1") === "(xy)");
console.log(indicesWithHelper("not really (possible)") === "(possible)");
console.log(indicesWithHelper("(abc)") === "(abc)");
console.log(indicesWithHelper("(abc)xyz") === "(abc)");
console.log(indicesWithHelper("(abc)x") === "(abc)");
console.log(indicesWithHelper("(x)") === "(x)");
console.log(indicesWithHelper("()") === "()");
console.log(indicesWithHelper("res (ipsa) loquitor") === "(ipsa)");
console.log(indicesWithHelper("hello(not really)there") === "(not really)");
console.log(indicesWithHelper("ab(ab)ab") === "(ab)");
