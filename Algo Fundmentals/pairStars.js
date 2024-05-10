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
Outline of algorithm #: 1
 
Base Cases: 
- If input string is empty then return an empty string
- If input string is a single character then return a single character

Input string is 2 characters
- If the first and second character are equal then return the first character followed by a star and then the second character

We could just return the first character followed by a star and then process the remaining string
This would create a recursive call stack of size N where N is length of the input string
Call stack would return after the last character is processed

🛠️ IMPLEMENT

*/

const pairStarsSlicing = (word) => {
  if (word.length <= 1) return word;
  if (word[0] === word[1])
    return word[0] + "*" + pairStarsSlicing(word.slice(1));
  return word[0] + pairStarsSlicing(word.slice(1));
};

const pairStarsIndex = (word) => {
  if (word.length < 2) return word;

  const helper = (index = 0) => {
    if (index >= word.length - 1) return word[index];
    if (word[index] === word[index + 1])
      return word[index] + "*" + helper(index + 1);
    return word[index] + helper(index + 1);
  };

  return helper();
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/
