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
- Declare a results variable and set it to zero
- Declare a multiplier variable and set it to 1

- Create a helper function that takes an index as the parameter
    - Base case
        - Index is -1 return
        - If at index 0 and it's a '-' then return the product of result and -1
    - Recursive case
        - Add the product of the current digit times the multiplier to the result
        - Update the multiplier by 10
        - Call the helper function and decrement the index
- Call the helper function with the rightmost digit will be intAsString[intAsString.length - 1]

🛠️ IMPLEMENT
function atoi(intAsString) {
def atoi(intAsString: str) -> int:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

const atoi = (intAsString) => {
	let result = 0;
	let multiple = 1;

	const helper = (index) => {
		if (index < 0) return result;
		if (index === 0 && intAsString[0] === "-") {
			result *= -1;
			return;
		}
		result += intAsString[index] * multiple;
		multiple *= 10;
		helper(index - 1);
	};

	helper(intAsString.length - 1);
	return result;
};
