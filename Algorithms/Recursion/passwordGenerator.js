/*

❓ PROMPT
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.

This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.

Example(s)
generatePasswords(["a"], 2, 4) === ["aa","aaa","aaaa"]

generatePasswords(["a", "b", "c"], 2, 3) === [
"aa","aaa","aab","aac",
"ab","aba","abb","abc",
"ac","aca","acb","acc",
"ba","baa","bab","bac",
"bb","bba","bbb","bbc",
"bc","bca","bcb","bcc",
"ca","caa","cab","cac",
"cb","cba","cbb","cbc",
"cc","cca","ccb","ccc"]

🔎 EXPLORE
State your assumptions & discoveries:
· Want to return a list of strings that are equal to and in between two given lengths


Create examples & test cases:

generatePasswords(["a"], 0, 0); // [""]
generatePasswords(["a"], 0, 1); // ["", "a"]
generatePasswords(["a"], 1, 2); // ["a", "aa"]
generatePasswords(["a"], 2, 3); // ["aa", "aaa"]
generatePasswords(["a"], 0, 2); // ["", "a", "aa"]
generatePasswords(["a"], 1, 3); // ["a", "aa", "aaa"]
generatePasswords(["a"], 0, 3); // ["", "a", "aa", "aaa"]

generatePasswords(["a", "b"], 0, 0); // [""]
generatePasswords(["a", "b"], 1, 1); // ["a", "b"]
generatePasswords(["a", "b"], 2, 2); // ["aa", "ab", "ba", "bb"]
generatePasswords(["a", "b"], 3, 3); // ["aaa", "aab" "aba", "abb", "baa", "bab", "bba", "bbb"]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion
Time: O(N^2)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Use a for loop to recursively call the function until our strings get to max length

🛠️ IMPLEMENT */

const generatePasswords = (validChars, minLen, maxLen) => {
	let passwords = [];

    const generator = (password = "", passwordLength = 0) => {
		if (passwordLength > maxLen) return;

		if (passwordLength >= minLen && passwordLength <= maxLen) passwords.push(password);

		for (const currentChar of validChars) {
			generator(password + currentChar, passwordLength + 1);
		}
	};

	generator();
	return passwords;
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

console.log(generatePasswords(["a"], 0, 0)); // [""]
console.log(generatePasswords(["a", "b"], 0, 0)); // [""]
console.log(generatePasswords(["a"], 0, 1)); // ["", "a"]
console.log(generatePasswords(["a"], 1, 2)); // ["a", "aa"]
console.log(generatePasswords(["a"], 2, 3)); // ["aa", "aaa"]
console.log(generatePasswords(["a"], 0, 2)); // ["", "a", "aa"]
console.log(generatePasswords(["a", "b"], 1, 1)); // ["a", "b"]
console.log(generatePasswords(["a"], 1, 3)); // ["a", "aa", "aaa"]
console.log(generatePasswords(["a", "b", "c", "d"], 0, 0)); // ['']
console.log(generatePasswords(["a"], 2, 4)); // ["aa", "aaa", "aaaa"]
console.log(generatePasswords(["a"], 0, 3)); // ["", "a", "aa", "aaa"]
console.log(generatePasswords(["a", "b"], 2, 2)); // ["aa", "ab", "ba", "bb"]
console.log(generatePasswords(["a", "b", "c", "d"], 3, 4).length === 320); // true
console.log(generatePasswords(["a", "b", "c", "d"], 3, 5).length === 1344); // true
console.log(generatePasswords(["a", "b", "c", "d"], 1, 1)); // ['a', 'b', 'c', 'd']
console.log(generatePasswords(["a", "b", "c", "d"], 0, 1)); // ['', 'a', 'b', 'c', 'd']
console.log(generatePasswords(["a", "b"], 3, 3)); // ["aaa", "aab", "aba", "abb", "baa", "bab", "bba", "bbb"]
console.log(generatePasswords(["a", "b", "c"], 2, 3)); // ["aa","aaa","aab","aac","ab","aba","abb","abc","ac","aca","acb","acc","ba","baa","bab","bac","bb","bba","bbb","bbc","bc","bca","bcb","bcc","ca","caa","cab","cac","cb","cba","cbb","cbc","cc","cca","ccb","ccc"'
console.log(generatePasswords(["a", "b", "c", "d"], 2, 3)); // ["aa","aaa","aab","aac","aad","ab","aba","abb","abc","abd","ac","aca","acb","acc","acd","ad","ada","adb","adc","add","ba","baa","bab","bac","bad","bb","bba","bbb","bbc","bbd","bc","bca","bcb","bcc","bcd","bd","bda","bdb","bdc","bdd","ca","caa","cab","cac","cad","cb","cba","cbb","cbc","cbd","cc","cca","ccb","ccc","ccd","cd","cda","cdb","cdc","cdd","da","daa","dab","dac","dad","db","dba","dbb","dbc","dbd","dc","dca","dcb","dcc","dcd","dd","dda","ddb","ddc","ddd"]
