/*

❓ PROMPT
Given a string, recursively compute a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

Example(s)
pairStars("hello") == "hel*lo"
pairStars("xxyy") == "x*xy*y"
pairStars("aaaa") == "a*a*a*a"

Input string can be empty
Input string will NOT be null
Input string can contain uppercase, lowercase, numbers and symbols


🔎 EXPLORE
List your assumptions & discoveries:
- Any string with 2 or more characters can be split up such that fullString = firstChar + restOfChars
- The output will never start nor end with a *
- Stars are only added when adjacents characters are identical

Insightful & revealing test cases:

Empty String
pairStars("") == ""

Single Character
pairStars("a") == "a"
pairStars("A") == "A"
pairStars("1") == "1"
pairStars("$") == "$"

Two indentical adjacent characters
pairStars("aa") == "a*a"
pairStars("AA") == "A*A"
pairStars("11") == "1*1"
pairStars("$$") == "$*$"
 
Two or more characters
pairStars("ab") == "ab"
pairStars("aA") == "aA"
pairStars("1$") == "1$"

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursive
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #:

🛠️ IMPLEMENT

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/
