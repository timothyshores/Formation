/*

Question : 

- isBalanced - input to this function is a string containing only ( and ) characters balanced?

Input : "(((((((((((((("
Output : False

Input: "()"
Output: True

Input: "()()()()()(((((())))))"
Output : True

Input: "))))))))))))"
Output : False

Edge case/Assumption/Observation: 
- 
1. Only ( and ) expected in the input string 
2. Empty string is balanced

Approach 1: Use a stack

If string length is 0 or odd return false
Initialize an empty stack using built in JS array
Iterate through the input string str
If we find an opening bracket append a closing bracket to the stack
If we encounter a closing bracket pop from the stack and check if it's a closing bracket

Time complexity: O(N) iterates through the string
Space complexity: O(N) store up to str.length - 1 characters in the stack

Approach 2: Use string manipulation

Create a while loop
While string is NOT empty 
replace '()' with '' 
When there's no more () found in the string
Return true if the final string is '' else return false
If the sting is NOT empty then return false

Time complexity: O(N^2)
Space complexity: O(1)

Approach 3: Iterate and use counter

Initialize a count variable and set to 0
If we encounter an opening bracket '(' add 1 to the count
If we encounter a closing bracket ')' subtract 1 from the count
If count is below 0 then we return false
After checking all characters return true if count is 0 else return false

Time complexity: O(N)
Space complexity: O(1)

*/

const stackBased = (brackets) => {
	if (brackets.length === 0) return true;
	if (brackets.length % 2 === 1) return false;

	const stack = [];

	for (const bracket of brackets) {
		switch (bracket) {
			case "(":
				stack.push(")");
			case ")":
				if (stack.pop() !== ")") return false;
		}
	}

	return stack.length === 0;
};

const stringManipulation = (brackets) => {
	while (bracket.length && brackets.indexOf("()") >= 0) {
		brackets.replace("()", "");
	}

	return brackets === "";
};

/* 

What if we add all 3 types of brackets (), {} and []

Examples

*/

/*

Follow up : 
- isAlmostBalanced - string contains only ( and ) but may contain at most one mistake.

*/

