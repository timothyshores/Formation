// Prompt
// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the substrings overlapping.

// Expected Runtime
// TIme: O(L) where L is the length of the larger string
// Space: O(L^2) where L is the length of the larger string to create each stack frame and to concatenate and slice a new length L string on each frame.

// Examples
// print(strCount("catcowcat", "cat") == 2)
// print(strCount("catcowcat", "cow") == 1)
// print(strCount("catcowcat", "dog") == 0)

const strCount = (word, sub) => {
	if (word.length < sub.length) return 0;
	if (word.substring(0, sub.length) === sub)
		return 1 + strCount(word.substring(sub.length), sub);

	return strCount(word.substring(1), sub);
};
