/*

PROMPT: 

Write a function called isBalanced that receives a string parameter str
The string parameter consistences only on opening parenthesis '(' and closing ')' characters
A balanced parenthesis is the combination '()'
Return true if the string only contains balanced parentheses of  

Examples Test Cases Return True

console.log(isBalanced(""));
console.log(isBalanced("()"));
console.log(isBalanced("(())"));
console.log(isBalanced("()()"));
console.log(isBalanced("(()())"));
console.log(isBalanced("((()))"));
console.log(isBalanced("()()()"));
console.log(isBalanced("(()())"));
console.log(isBalanced("(())(())"));
console.log(isBalanced("()(())()"));
console.log(isBalanced("()((()))"));
console.log(isBalanced("()(())(())"));
console.log(isBalanced("((()))((()))"));
console.log(isBalanced("(())(())(())"));
console.log(isBalanced("()()()()()(((((())))))"));
console.log(isBalanced("()()()()()(((((())))))"));

Examples Test Cases Return False

console.log(isBalanced("("));
console.log(isBalanced(")"));
console.log(isBalanced(")("));
console.log(isBalanced("())"));
console.log(isBalanced("(()"));
console.log(isBalanced("(("));
console.log(isBalanced("))"));
console.log(isBalanced("))("));
console.log(isBalanced("((("));
console.log(isBalanced(")))"));
console.log(isBalanced("))(("));
console.log(isBalanced("(((("));
console.log(isBalanced("(((()"));
console.log(isBalanced("(((())"));
console.log(isBalanced("()))))"));
console.log(isBalanced("(()))))"));
console.log(isBalanced("(()(()("));
console.log(isBalanced("((())))))"));
console.log(isBalanced("(((((((((((((("));
console.log(isBalanced("))))))))))))"));

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
Replace '()' with '' 
When there's no more () found in the string
Return true if the final string is '' 
If the sting is NOT empty then return false

Time complexity: O(N^2) call .replace N number of times and .replace is an O(N) operation
Space complexity: O(N) to store the initial input string 

*/

const isBalanced = (str) => {};
