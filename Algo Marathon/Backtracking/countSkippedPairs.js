/*

❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

The string can be empty and characters can be lowercase, uppercase, numbers and special character

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1

🔎 EXPLORE
List your assumptions & discoveries:
- Want to find the count of the number of times where the same character appears twice with another character in between the duplicate character

Insightful & revealing test cases:

countSkippedPairs("") == 0
countSkippedPairs("a") == 0
countSkippedPairs("x") == 0
countSkippedPairs("ax") == 0
countSkippedPairs("xa") == 0
countSkippedPairs("axx") == 0
countSkippedPairs("axa") == 1
countSkippedPairs("axA") == 0
countSkippedPairs("Axa") == 0
countSkippedPairs("AxA") == 1
countSkippedPairs("axaa") == 1
countSkippedPairs("aaxa") == 1
countSkippedPairs("axaz") == 0
countSkippedPairs("axax") == 2

🧠 BRAINSTORM
What approaches could work?

📆 PLAN
Outline of algorithm #:
🛠️ IMPLEMENT
function countSkippedPairs(word) {
def countSkippedPairs(word: str) -> int:

*/
