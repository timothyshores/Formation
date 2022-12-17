// Prompt
// Given a string, insert a star (*) between each character.

// Expected Runtime
// Time: O(L) where L is the length of the string
// Space: O(L) where L is the length of the string when using an index or O(L^2) when slicing new strings

// Examples
// console.log(addStars("hello") === "h*e*l*l*o"); // true
// console.log(addStars("abc") === "a*b*c"); // true
// console.log(addStars("ab") === "a*b"); // true

const addStars = (word) => {
	if (word === "") return "";
	if (word.length === 1) return word;
	return word[0] + "*" + addStars(word.substring(1));
};
