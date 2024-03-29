/*

Given a word, print all subsequences of the word.

All the subsequences of the word "ABCD" are:

"ABCD"
"ABC"
"ABD"
"AB"
"ACD"
"AC"
"AD"
"A"
"BCD"
"BC"
"BD"
"B"
"CD"
"C"
"D"
"" 

Implement this 2 ways. First use string slicing creating a copy of the substring then using indices

*/

const printAllSubsequencesUsingSlicing = (word) => {
	const helper = (str = word, currentSubsequence = "") => {
		// Base case: when str is the empty string
		if (str.length === 0) {
			console.log(currentSubsequence);
			return;
		}

		// Recursive case 1: include the current character
		helper(str.substring(1), currentSubsequence + str[0]);

		// Recursive case 2: exclude the current character
		helper(str.substring(1), currentSubsequence);
	};

	helper();
};

const printAllSubsequencesUsingIndices = (word) => {
	const helper = (index = 0, currentSubsequence = "") => {
		// Base case: when index is word.length all characters have been recursed called recursively
		if (index === word.length) {
			console.log(currentSubsequence);
			return;
		}

		// Recursive case 1: include the current character
		helper(index + 1, currentSubsequence + word[index]);

		// Recursive case 2: exclude the current character
		helper(index + 1, currentSubsequence);
	};

	helper();
};

// Test cases
printAllSubsequencesUsingSlicing("ABCD");
printAllSubsequencesUsingIndices("ABCD");
