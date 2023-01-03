/*
❓ PROMPT
Define a subsequence of a string s to be a list of characters from s such that the characters appear in the same order in the list and in s.
For instance, for the string abcd, a, ab, and acd are valid subsequences, whereas db is not, since b comes before d in the original string.
Given an input string, return all subsequences of the string except the empty string.

Example
console.log(getAllSubsequences("abc")); // ["a","b","c","ab","ac","bc","abc"]

🔎 EXPLORE
State your assumptions & discoveries: 

Want to output all unique permutations of the input string

Create examples & test cases:

console.log(getAllSubsequences("")); // [""]
console.log(getAllSubsequences("a")); // ["a"]
console.log(getAllSubsequences("ab")); // ["a, b, ab"]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion
Time: O(n^2)
Space: O(n)

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT  */

const getAllSubsequences = (str) => {
	const allSubsequences = [];

	const helper = (currentSubsequence = "", index = 0) => {
		// Base case is no more characters to add
		if (index === str.length) {
			// Push non-empty currentSubsequence into allSubsequences
			if (currentSubsequence) allSubsequences.push(currentSubsequence);
			return;
		}

		// Skip current character in recursive call
		helper(currentSubsequence, index + 1);

		// Add current character in recursive call
		helper(currentSubsequence + str[index], index + 1);
	};

	helper();

	return allSubsequences;
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
