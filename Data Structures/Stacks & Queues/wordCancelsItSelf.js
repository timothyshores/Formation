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

Approach 2:

Split the input string str into separate strings
Store in an array called words
If words array has an odd length return false 
Each word needs another word to cancel itself out
Another way of saying this is that there needs to be an even number of words
In initialize an empty stack
Iterate through the words array
If the stack is empty then add the current word to the top of the stack
If the stack is NOT empty then pop the top element from the top of the stack
Compare the current word to the word that was popped off of the top of the currentStack
If the words are different then the words do NOT cancel themselves out and return false
If the words are the same then we continue iterating until we reach the end of the words array
If we reach the end of the words array and the stack is NOT empty 
Then the words do NOT cancel themselves out and return false
If we reach the end of the words array and the stack is empty
Then all words have a matching pair that cancels itself out and return true

Time complexity: O(N) to iterate through the loop 
Space complexity: O(N) to store the string as an array of words and words in a stack

FUNCTION SIGNATURE
function wordsCancelsItself(str)
*/

const wordsCancelItself1 = (str) => {
	const words = str.split(" ");

	if (words.length % 2 !== 0) return false;

	for (let i = 1; i < words.length; i++) {
		if (i % 2 === 1 && words[i - 1] !== words[i]) return false;
	}

	return true;
};

const wordsCancelItself2 = (str) => {
	const stack = [];
	const words = str.split(" ");

	if (words.length % 2 === 1) return false;

	for (const word of words) {
		if (stack.length) {
			if (stack.pop() !== word) return false;
		} else {
			stack.push(word);
		}
	}

	return !stack.length;
};

console.log("Test cases using approach 1 should all return true");
console.log("--------------------------------------------------");
console.log(!wordsCancelItself1("no"));
console.log(!wordsCancelItself1("what"));
console.log(!wordsCancelItself1("no what"));
console.log(wordsCancelItself1("what what"));
console.log(!wordsCancelItself1("what no what"));
console.log(wordsCancelItself1("what what no no"));
console.log(wordsCancelItself1("no no what what"));
console.log(!wordsCancelItself1("what what what"));
console.log(!wordsCancelItself1("what no no what"));
console.log(!wordsCancelItself1("what no no what"));
console.log(wordsCancelItself1("what what what what"));
console.log(wordsCancelItself1("what what no no yes yes"));
console.log(!wordsCancelItself1("what what what what what"));
console.log(wordsCancelItself1("what what what what what what"));
