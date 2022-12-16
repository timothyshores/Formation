// Prompt
// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

// Expected Runtime
// Time: O(L) where L is the length of the string
// Space: O(L) where L is the length of the string when using an index or O(L^2) when slicing new strings

// Examples
// console.log(countX("xxhixx") === 4); // true
// console.log(countX("xhixhix") === 3); // true
// console.log(countX("hi") === 0); // true

const countX = (word) => {
	if (word === "") return 0;
	if (word[0] === "x") return 1 + countX(word.substring(1));
	return countX(word.substring(1));
};

// empty string
console.log(countX("") === 0); // true

// single character strings
console.log(countX("a") === 0); // true
console.log(countX("b") === 0); // true
console.log(countX("c") === 0); // true
console.log(countX("x") === 1); // true
console.log(countX("y") === 0); // true
console.log(countX("z") === 0); // true

// string with capitalized X
console.log(countX("X") === 0); // true

// string with all x's
console.log(countX("xx") === 2); // true
console.log(countX("xxx") === 3); // true
console.log(countX("xxxx") === 4); // true
console.log(countX("xxxxx") === 5); // true
console.log(countX("xxxxxxxxxx") === 10); // true

// string with no x's
console.log(countX("abcdefghijklmnopqrstuvwyz") === 0); // true

// string with a mixture of x's and other characters
console.log(countX("xa") === 1); // true
console.log(countX("ax") === 1); // true
console.log(countX("xaxb") === 2); // true
console.log(countX("axbx") === 2); // true
console.log(countX("xaxbxc") === 3); // true
console.log(countX("axbxcx") === 3); // true
console.log(countX("xaxbxcxd") === 4); // true
console.log(countX("axbxcxdx") === 4); // true
console.log(countX("xaxbxcxdxe") === 5); // true
console.log(countX("axbxcxdxex") === 5); // true
