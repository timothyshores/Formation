// Prompt
// We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

// Expected Runtime
// Time: O(L) where L is the length of the string
// Space: O(L) where L is the length of the string when using an index or O(L^2) when slicing new strings

// Examples
// countSkippedPairs("axa") == 1
// countSkippedPairs("axax") == 2
// countSkippedPairs("aaa") == 1

const countSkippedPairs = (word) => {};
