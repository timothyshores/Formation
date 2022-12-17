// Prompt
// Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

// Expected Runtime
// Time: O(L) where L is the length of the larger string
// Space: O(L) where L is the length of the larger string to create each stack frame. O(L2) if slicing the string on each recursive step

// Examples
// console.log(pairStars("hello") === "hel*lo"); // true
// console.log(pairStars("xxyy") === "x*xy*y"); // true
// console.log(pairStars("aaaa") === "a*a*a*a"); // true

const pairStars = (word) => {
	if (word === "") return "";
	if (word[0] === word[1]) return word[0] + "*" + pairStars(word.substring(1));
	return word[0] + pairStars(word.substring(1));
};

// empty string
console.log(pairStars("") === ""); // true

// 1-character string
console.log(pairStars("a") === "a"); // true
console.log(pairStars("b") === "b"); // true
console.log(pairStars("c") === "c"); // true

// 2-character strings
console.log(pairStars("aa") === "a*a"); // true
console.log(pairStars("bb") === "b*b"); // true
console.log(pairStars("AA") === "A*A"); // true

// string with no adjacent characters
console.log(pairStars("ab") === "ab"); // true
console.log(pairStars("abc") === "abc"); // true
console.log(pairStars("abcd") === "abcd"); // true
console.log(
	pairStars("abcdefghijklmnopqrstuvwxyz") === "abcdefghijklmnopqrstuvwxyz"
); // true

// string with all the same character
console.log(pairStars("aaa") === "a*a*a"); // true
console.log(pairStars("aaaa") === "a*a*a*a"); // true
console.log(pairStars("aaaaa") === "a*a*a*a*a"); // true

// string with a mixture of adjacent and non-adjacent characters
console.log(pairStars("hello") === "hel*lo"); // true
console.log(pairStars("xxyy") === "x*xy*y"); // true
