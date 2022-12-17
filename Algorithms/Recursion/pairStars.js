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
