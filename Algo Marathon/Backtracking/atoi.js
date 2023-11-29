/*

❓ PROMPT
Given a base-10 integer as a string, parse the integer and return it as an int. This problem can be done iteratively and recursively, and it's worth doing both! 

Example(s)
atoi("123") == 123
atoi("4") == 4
atoi("007") == 7
atoi("-1") == -1

🔎 EXPLORE
List your assumptions & discoveries:
- Convert the string integer to an integer

Insightful & revealing test cases:
atoi("0") == 0
atoi("1") == 1
atoi("10") == 10
atoi("10001") == 10001

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion using a multiplier. Start at the end and move left. Multiple the multiplier by 10 every time you decrement the index.
Time: O(N)
Space: O(1)

Additional Notes
- The string can contain leading zeroes
- The string can start with a - to indicate a negative number

📆 PLAN
Outline of algorithm #: 

🛠️ IMPLEMENT
function atoi(intAsString) {
def atoi(intAsString: str) -> int:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/
