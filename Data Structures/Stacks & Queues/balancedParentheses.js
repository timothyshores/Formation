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

Approach 3: Iterate and use counter

Initialize a count variable and set to 0
If we encounter an opening bracket '(' add 1 to the count
If we encounter a closing bracket ')' subtract 1 from the count
If count ever drops below 0 then return false
After checking all characters return true if count is 0 else return false

Time complexity: O(N) to iterate through the input string str
Space complexity: O(1) to store the current count

*/

const stackBasedApproach = (brackets) => {
	if (brackets.length === 0) return true;
	if (brackets.length % 2 === 1) return false;

	const stack = [];

	for (const bracket of brackets) {
		switch (bracket) {
			case "(":
				stack.push(")");
				break;
			case ")":
				if (stack.pop() !== ")") return false;
		}
	}

	return stack.length === 0;
};

console.log("Test Cases Return True");
console.table([
	{ Input: "", Output: stackBasedApproach("") },
	{ Input: "()", Output: stackBasedApproach("()") },
	{ Input: "(())", Output: stackBasedApproach("(())") },
	{ Input: "()()", Output: stackBasedApproach("()()") },
	{ Input: "(()())", Output: stackBasedApproach("(()())") },
	{ Input: "((()))", Output: stackBasedApproach("((()))") },
	{ Input: "()()()", Output: stackBasedApproach("()()()") },
	{ Input: "(()())", Output: stackBasedApproach("(()())") },
	{ Input: "()(())", Output: stackBasedApproach("()(())") },
	{ Input: "(())(())", Output: stackBasedApproach("(())(())") },
	{ Input: "()(())()", Output: stackBasedApproach("()(())()") },
	{ Input: "()((()))", Output: stackBasedApproach("()((()))") },
	{ Input: "()(())(())", Output: stackBasedApproach("()(())(())") },
	{ Input: "((()))((()))", Output: stackBasedApproach("((()))((()))") },
	{ Input: "(())(())(())", Output: stackBasedApproach("(())(())(())") },
]);

console.log("Test Cases Return False");
console.table([
	{ Input: "(", Output: stackBasedApproach("(") },
	{ Input: ")", Output: stackBasedApproach(")") },
	{ Input: "()", Output: stackBasedApproach(")(") },
	{ Input: "())", Output: stackBasedApproach("())") },
	{ Input: "(()", Output: stackBasedApproach("(()") },
	{ Input: "((", Output: stackBasedApproach("((") },
	{ Input: "))", Output: stackBasedApproach("))") },
	{ Input: "))(", Output: stackBasedApproach("))(") },
	{ Input: "(((", Output: stackBasedApproach("(((") },
	{ Input: ")))", Output: stackBasedApproach(")))") },
	{ Input: "))((", Output: stackBasedApproach("))((") },
	{ Input: "((((", Output: stackBasedApproach("((((") },
	{ Input: "(((()", Output: stackBasedApproach("(((()") },
	{ Input: "(((())", Output: stackBasedApproach("(((())") },
	{ Input: "()))))", Output: stackBasedApproach("()))))") },
	{ Input: "(()))))", Output: stackBasedApproach("(()))))") },
	{ Input: "(()(()(", Output: stackBasedApproach("(()(()(") },
	{ Input: "((())))))", Output: stackBasedApproach("((())))))") },
	{ Input: "((((((((((((((", Output: stackBasedApproach("((((((((((((((") },
	{ Input: "))))))))))))", Output: stackBasedApproach("))))))))))))") },
]);
