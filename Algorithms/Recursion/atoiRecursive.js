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

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion

Time: O(N) where n is the length of the input string 
Space: O(N) where n is the length of the input string.

📆 PLAN
High-level outline of approach #: 1

If the length of the input string is 0 return NaN

Initialize a variable sign to 1 to keep track if the input string is a positive or negative integer

If the first character of the input string is '-', 
    Set sign to -1
    Remove the '-' character from the input string.

We extract the first character of the input string using charCodeAt and subtract 48 to get its integer value, which we store in a variable digit.

We then extract the rest of the input string and store it in a variable restOfString.

If the length of restOfString is 0, we return sign * digit, which is the final result.

Otherwise, we recursively call atoi on restOfString to obtain the integer value of the rest of the string, and then add digit multiplied by 10 raised to the power of the length of restOfString to shift the existing digits of the result to the left and add the new digit on the right. We multiply this sum by sign to account for the sign of the original input string, and return it as the final result.

🛠️ IMPLEMENT */
const atoi = (intAsString) => {};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/
