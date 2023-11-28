/*

❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

The string can be empty and characters can be lowercase, uppercase, numbers and special character

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1

🔎 EXPLORE
List your assumptions & discoveries:
- Want to find the count of the number of times where the same character appears twice with another character in between the duplicate character

Insightful & revealing test cases:

countSkippedPairs("") == 0
countSkippedPairs("a") == 0
countSkippedPairs("x") == 0
countSkippedPairs("ax") == 0
countSkippedPairs("xa") == 0
countSkippedPairs("axx") == 0
countSkippedPairs("axa") == 1
countSkippedPairs("axA") == 0
countSkippedPairs("Axa") == 0
countSkippedPairs("AxA") == 1
countSkippedPairs("axaa") == 1
countSkippedPairs("aaxa") == 1
countSkippedPairs("axaz") == 0
countSkippedPairs("axax") == 2

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Check first and third characters. Add 1 to the count if they're equal. Call the function recursively excluding the first character.
Time: O(N)
Space: O(1) assuming that the stack in memory is not included. Only tracking the current count which is an int takes O(1) constant space.

📆 PLAN
Outline of algorithm #: 1

- If the length of the string is less than 3 e.g. 0, 1 or 2 return 0
- If the length of the string is 3 characters or more
    - Check the first and the third character in the word
        - If they're the same return 1 + then call the function recursively excluding the first character
        - If they're NOT the same then then call the function recursively excluding the first character

🛠️ IMPLEMENT
function countSkippedPairs(word) {
def countSkippedPairs(word: str) -> int:

*/

const sliceNoHelper = (word) => {
	if (word.length < 3) return 0;
	if (word[0] === word[2]) {
		return 1 + sliceNoHelper(word.substring(1));
	} else {
		return sliceNoHelper(word.substring(1));
	}
};

const sliceWithHelper = (word) => {
	const helper = (index = 0) => {
		if (word.length - index < 3) return 0;
		if (word[index] === word[index + 2]) {
			return 1 + helper(index + 1);
		} else {
			return helper(index + 1);
		}
	};

	return helper();
};

const indicesNoHelper = (word, index = 0) => {
	if (word.length - index < 3) return 0;
	if (word[index] === word[index + 2]) {
		return 1 + indicesNoHelper(word, index + 1);
	} else {
		return indicesNoHelper(word, index + 1);
	}
};

const indicesWithHelper = (word) => {
	const helper = (index = 0) => {
		if (word.length - index < 3) return 0;
		if (word[index] === word[index + 2]) {
			return 1 + helper(index + 1);
		} else {
			return helper(index + 1);
		}
	};

	return helper();
};

// All test cases return true

// sliceNoHelper test cases
console.log(sliceNoHelper("") == 0);
console.log(sliceNoHelper("a") == 0);
console.log(sliceNoHelper("x") == 0);
console.log(sliceNoHelper("ax") == 0);
console.log(sliceNoHelper("ax") == 0);
console.log(sliceNoHelper("xa") == 0);
console.log(sliceNoHelper("hi") == 0);
console.log(sliceNoHelper("axx") == 0);
console.log(sliceNoHelper("axA") == 0);
console.log(sliceNoHelper("Axa") == 0);
console.log(sliceNoHelper("aaa") == 1);
console.log(sliceNoHelper("axa") == 1);
console.log(sliceNoHelper("AxA") == 1);
console.log(sliceNoHelper("axxa") == 0);
console.log(sliceNoHelper("axaa") == 1);
console.log(sliceNoHelper("aaxa") == 1);
console.log(sliceNoHelper("axaz") == 1);
console.log(sliceNoHelper("axbx") == 1);
console.log(sliceNoHelper("axax") == 2);
console.log(sliceNoHelper("hihih") == 3);
console.log(sliceNoHelper("ihihhh") == 3);
console.log(sliceNoHelper("ihjxhh") == 0);
console.log(sliceNoHelper("aaaaaaaa") == 6);

// sliceWithHelper test cases
console.log(sliceWithHelper("") == 0);
console.log(sliceWithHelper("a") == 0);
console.log(sliceWithHelper("x") == 0);
console.log(sliceWithHelper("ax") == 0);
console.log(sliceWithHelper("ax") == 0);
console.log(sliceWithHelper("xa") == 0);
console.log(sliceWithHelper("hi") == 0);
console.log(sliceWithHelper("axx") == 0);
console.log(sliceWithHelper("axA") == 0);
console.log(sliceWithHelper("Axa") == 0);
console.log(sliceWithHelper("aaa") == 1);
console.log(sliceWithHelper("axa") == 1);
console.log(sliceWithHelper("AxA") == 1);
console.log(sliceWithHelper("axxa") == 0);
console.log(sliceWithHelper("axaa") == 1);
console.log(sliceWithHelper("aaxa") == 1);
console.log(sliceWithHelper("axaz") == 1);
console.log(sliceWithHelper("axbx") == 1);
console.log(sliceWithHelper("axax") == 2);
console.log(sliceWithHelper("hihih") == 3);
console.log(sliceWithHelper("ihihhh") == 3);
console.log(sliceWithHelper("ihjxhh") == 0);
console.log(sliceWithHelper("aaaaaaaa") == 6);

// indicesNoHelper test cases
console.log(indicesNoHelper("") == 0);
console.log(indicesNoHelper("a") == 0);
console.log(indicesNoHelper("x") == 0);
console.log(indicesNoHelper("ax") == 0);
console.log(indicesNoHelper("ax") == 0);
console.log(indicesNoHelper("xa") == 0);
console.log(indicesNoHelper("hi") == 0);
console.log(indicesNoHelper("axx") == 0);
console.log(indicesNoHelper("axA") == 0);
console.log(indicesNoHelper("Axa") == 0);
console.log(indicesNoHelper("aaa") == 1);
console.log(indicesNoHelper("axa") == 1);
console.log(indicesNoHelper("AxA") == 1);
console.log(indicesNoHelper("axxa") == 0);
console.log(indicesNoHelper("axaa") == 1);
console.log(indicesNoHelper("aaxa") == 1);
console.log(indicesNoHelper("axaz") == 1);
console.log(indicesNoHelper("axbx") == 1);
console.log(indicesNoHelper("axax") == 2);
console.log(indicesNoHelper("hihih") == 3);
console.log(indicesNoHelper("ihihhh") == 3);
console.log(indicesNoHelper("ihjxhh") == 0);
console.log(indicesNoHelper("aaaaaaaa") == 6);

// indicesWithHelper test cases
console.log(indicesWithHelper("") == 0);
console.log(indicesWithHelper("a") == 0);
console.log(indicesWithHelper("x") == 0);
console.log(indicesWithHelper("ax") == 0);
console.log(indicesWithHelper("ax") == 0);
console.log(indicesWithHelper("xa") == 0);
console.log(indicesWithHelper("hi") == 0);
console.log(indicesWithHelper("axx") == 0);
console.log(indicesWithHelper("axA") == 0);
console.log(indicesWithHelper("Axa") == 0);
console.log(indicesWithHelper("aaa") == 1);
console.log(indicesWithHelper("axa") == 1);
console.log(indicesWithHelper("AxA") == 1);
console.log(indicesWithHelper("axxa") == 0);
console.log(indicesWithHelper("axaa") == 1);
console.log(indicesWithHelper("aaxa") == 1);
console.log(indicesWithHelper("axaz") == 1);
console.log(indicesWithHelper("axbx") == 1);
console.log(indicesWithHelper("axax") == 2);
console.log(indicesWithHelper("hihih") == 3);
console.log(indicesWithHelper("ihihhh") == 3);
console.log(indicesWithHelper("ihjxhh") == 0);
console.log(indicesWithHelper("aaaaaaaa") == 6);
