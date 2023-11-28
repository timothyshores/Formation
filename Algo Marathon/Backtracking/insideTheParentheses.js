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
