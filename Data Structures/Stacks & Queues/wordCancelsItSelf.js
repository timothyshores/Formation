/*

Words Cancels Itself

Given a string of random words, determine if each word immediately cancels itself out. 

EXAMPLE(S)
For example, '*what what no no*' cancels itself out so it returns true because the '*what*'s cancel each other out followed by the '*no*'s in this arrangement.

'*what no what no*' returns false because the '*what*'s don't immediately cancel each other out. There's a '*no*' in between the '*what*'s.

• s = "what what no no" => true
• s = "what what no" => false
• s = "what no what no" => false

// Example Test Cases Return True
console.log(!wordsCancelItself('no')); 
console.log(!wordsCancelItself('what')); 
console.log(!wordsCancelItself('no what')); 
console.log(wordsCancelItself('what what')); 
console.log(!wordsCancelItself('what no what')); 
console.log(wordsCancelItself('what what no no')); 
console.log(wordsCancelItself('no no what what')); 
console.log(!wordsCancelItself('what what what')); 
console.log(!wordsCancelItself("what no no what")); 
console.log(!wordsCancelItself('what no no what')); 
console.log(wordsCancelItself("what what what what")); 
console.log(wordsCancelItself('what what no no yes yes'));
console.log(!wordsCancelItself('what what what what what')); 
console.log(wordsCancelItself('what what what what what what')); 

Approach 1:

Split the input string str into seperate strings
Store in an array called words
If words array has an odd lenth return false 
Each word needs another word to cancel itself out
Another way of saying this is that there needs to be an even number of words
Iterate through the words array using a for loop starting at index 1
When the index is odd we current the current word and the previous word
If the previous word and current word are NOT the same then return false
When we've checked every pair of words in the words array
And every word pair cancels itself out return true

Time complexity: O(N) to iterate through the loop 
Space complexity: O(N) to store the string as an array of words

FUNCTION SIGNATURE
function isNegated(str)
*/

const wordsCancelItself1 = (str) => {};
