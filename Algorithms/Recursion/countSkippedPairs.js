// Prompt
// We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

// Expected Runtime
// Time: O(L) where L is the length of the string
// Space: O(L) where L is the length of the string when using an index or O(L^2) when slicing new strings

// Examples
// countSkippedPairs("axa") == 1
// countSkippedPairs("axax") == 2
// countSkippedPairs("aaa") == 1

const countSkippedPairs = (word) => {
	if (word.length < 3) return 0;

	if (word[0] === word[2]) return 1 + countSkippedPairs(word.substring(1));

	return countSkippedPairs(word.substring(1));
};

// empty string
console.log(countSkippedPairs("") === 0); // true

// single character string
console.log(countSkippedPairs("a") === 0); // true
console.log(countSkippedPairs("b") === 0); // true
console.log(countSkippedPairs("c") === 0); // true

// 2-character string
console.log(countSkippedPairs("aa") === 0); // true
console.log(countSkippedPairs("bb") === 0); // true
console.log(countSkippedPairs("cc") === 0); // true

// 3-character strings
console.log(countSkippedPairs("aba") === 1); // true
console.log(countSkippedPairs("bab") === 1); // true
console.log(countSkippedPairs("abc") === 0); // true
console.log(countSkippedPairs("xyz") === 0); // true

// strings with alternating characters
console.log(countSkippedPairs("abab") === 2); // true
console.log(countSkippedPairs("xyxyx") === 3); // true
console.log(countSkippedPairs("abcabc") === 0); // true

// strings of all the same character
console.log(countSkippedPairs("aaa") === 1); // true
console.log(countSkippedPairs("aaaa") === 2); // true
console.log(countSkippedPairs("aaaaa") === 3); // true

// repeated 2-character strings
console.log(countSkippedPairs("aba") === 1); // true
console.log(countSkippedPairs("abab") === 2); // true
console.log(countSkippedPairs("ababa") === 3); // true
console.log(countSkippedPairs("ababab") === 4); // true
console.log(countSkippedPairs("abababa") === 5); // true
