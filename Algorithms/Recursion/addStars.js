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

// empty string
console.log(addStars("") === ""); // true

// 1 character string
console.log(addStars("a") === "a"); // true
console.log(addStars("A") === "A"); // true
console.log(addStars("z") === "z"); // true
console.log(addStars("Z") === "Z"); // true

// multi-character string
console.log(addStars("ab") === "a*b"); // true
console.log(addStars("ba") === "b*a"); // true
console.log(addStars("AA") === "A*A"); // true
console.log(addStars("abc") === "a*b*c"); // true
console.log(addStars("hello") === "h*e*l*l*o"); // true

// non-alphabetic string
console.log(addStars("1") === "1"); // true
console.log(addStars("2") === "2"); // true
console.log(addStars("3") === "3"); // true
console.log(addStars("12") === "1*2"); // true
console.log(addStars("23") === "2*3"); // true
console.log(addStars("123") === "1*2*3"); // true
