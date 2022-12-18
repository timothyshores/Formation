// Prompt
// Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

// Expected Runtime
// Time: O(L) where L is the length of the string
// Space: O(L^2) where L is the length of the string to create each stack frame and to concatenate and slice a new length L string on each frame

// Examples
// console.log(parenBit("xyz(abc)123") === "(abc)");
// console.log(parenBit("x(hello)") === "(hello)");
// console.log(parenBit("(xy)1") === "(xy)");

const parenBit = (word) => {
	// if the first character is not (
	if (word[0] !== "(")
		// remove the first letter and call the parenBit function with .substring(1)
		return parenBit(word.substring(1));

	// if the last character is not )
	if (word[word.length - 1] !== ")")
		// remove the last letter and call the parenBit function with .substring(0, str.length - 1)
		return parenBit(word.substring(0, word.length - 1));

	// the first char is "(" and the last char is ")"
	return word;
};
