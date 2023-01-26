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

🛠️ IMPLEMENT */

const generatePasswords = (validChars, minLen, maxLen) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
