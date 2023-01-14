/*

Prompt
The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F.  The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.

Given a number n, write a function that prints out all n-digit ternary numbers.

Function Signature
def generateNDigitTernaries(n: int) -> List[str]:

Expected Runtime
Time: O(3n) to generate each of the 3 possibilities for all n positions
Space: O(n) to create up to n stack frames

Examples
Numbers starting with zero shouldn't normally be included but the ternary representing the zero value is a valid 1-digit ternary. No other strings should start with a "0"!

generateNDigitTernaries(1) == ["0","1","2"]
generateNDigitTernaries(2) == ["10","11","12","20","21","22"]

🏴‍☠️  Explore
Summarize this problem in your own words
• We want to return all combinations of ternary numbers
• Ternary is like binary except it also includes the number 2
• We only want to return the ternary numbers that have an input of the argument n passed into our function 
• The number 0 is only included when n === 1
• If n > 1 then every number MUST start with either 1 or 2
• Another way to phrase this is if n > 1 then numbers can NOT start with a 0

🧠  Brainstorm

🛠️  Implement
*/
