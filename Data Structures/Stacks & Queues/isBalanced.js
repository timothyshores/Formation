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


*/

/* 

What if we add all 3 types of brackets (), {} and []

Examples

*/

/*

Follow up : 
- isAlmostBalanced - string contains only ( and ) but may contain at most one mistake.

*/

