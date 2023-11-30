/*

❓ PROMPT
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters appear in the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas "db" is not, since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string.

Example(s)
getAllSubsequences("abc") ==["a", "b", "c", "ab", "ac", "bc", "abc"]

🔎 EXPLORE
List your assumptions & discoveries:
- Return all subsequences of a string in an arry

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursive backtracking
Time: O(2^N) where N is the length of the string
Space: O(2^N) - 1 number of subsequences and O(N) for the stack in memory

📆 PLAN
Outline of algorithm #: 1

- Initialize an empty array called subsequences
- Create a helper function called getSubsequence that receives an index as a parameter and the current subsequence
    - Base case
        - When index is equal to the length of the string return
    - Recursive cases
        - Recursive case 1: Include the current character at index and call the helper function with index + 1
        - Recursive case 2: Exclude the current character at index and call the helper function with index + 1
- Call helper function getSubsequence with index 0
- Return the subsequences array

🛠️ IMPLEMENT
function getAllSubsequences(word) {
def getAllSubsequences(word: str) -> list[str]:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

const getAllSubsequences = (word) => {
	const subsequences = []; // []
	const getSubsequence = (index = 0, subsequence = "") => {
		if (index === word.length) {
			if (subsequence.length > 0) subsequences.push(subsequence);
			return;
		}
		getSubsequence(index + 1, subsequence + word[index]);
		getSubsequence(index + 1, subsequence);
	};

	getSubsequence();
	return subsequences;
};
