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

// empty word and non-empty sub
console.log(strCount("", "hi"));
console.log(strCount("", "HI"));

// non empty word does NOT contain sub
console.log(strCount("I", "HI"));
console.log(strCount("H", "HI"));

// 1 character word
console.log(strCount("a", "a"));
console.log(strCount("A", "A"));
console.log(strCount("z", "z"));
console.log(strCount("Z", "Z"));

// word matches sub
console.log(strCount("hi", "hi"));
console.log(strCount("HI", "HI"));

// word is the sub twice
console.log(strCount("hihi", "hi"));
console.log(strCount("HIHI", "HI"));

// word has sub at the beginning and end
console.log(strCount("hih", "hi"));
console.log(strCount("HII", "HI"));

// word has sub followed by some text followed by sub
console.log(strCount("hihellotherehi", "hi"));
console.log(strCount("helloWorldhello", "hello"));

// word has overlapping sub
console.log(strCount("IHIHI", "HI"));
console.log(strCount("ihihi", "hi"));
console.log(strCount("HIHIHI", "HI"));
