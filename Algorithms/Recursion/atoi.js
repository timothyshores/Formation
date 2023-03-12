/*

❓ PROMPT
Given a base-10 integer as a string, parse the integer and return it as an int. This problem can be done iteratively and recursively, and it's worth doing both! 

Example(s)
atoi("123") == 123
atoi("4") == 4
atoi("007") == 7
atoi("-1") == -1

🔎 EXPLORE
State your assumptions & discoveries: 
· Want to convert a string integer into an integer using recursion
· Integers either start with a non-zero or a negative number
· The only time an integer is allowed to start with a zero is if the integer is 0

Create examples & test cases:
atoi("0") === 0
atoi("1") === 0
atoi("00") === 0
atoi("01") === 0
atoi("-1") === -1
atoi("10") === 10
atoi("001") === 0
atoi("010") === 10
atoi("0001") === 0
atoi("100") === 100
atoi("00001") === 0
atoi("0100") === 100
atoi("1000") === 1000
atoi("01000") === 1000
atoi("001000") === 1000
atoi("0001000") === 1000
atoi("00001000") === 1000

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Iterative for loop
Time: O(N) to iterate through N characters of intAsString 
Space: O(N) to store the result string

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */
const atoi = (intAsString) => {};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/
