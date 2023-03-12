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
High-level outline of approach #: 1

Initialize a variable result to 0, which will store the integer value of the string
Initialize a variable index to 0, which will keep track of our current position in the string
Initialize a boolean variable isPositive and set to true which will keep track of whether the integer is positive or negative
If the first character in the input string is '-', increment index by 1 to skip over the '-' character and set isPositive to false
Iterate through the string, starting from our current position index and moving right one index at a time

For each character in the input string
    Convert the character to its ASCII code using the charCodeAt method
    Subtract 48 from the ASCII code to get the integer value of the character
    Multiply the result variable by 10 and add the integer value of the character
        This effectively shifts the existing digits of result one place to the left and adds the new digit on the right

If the integer is positive, return the result variable, otherwise return the product of the result variable and -1 to convert it to a negative integer

🛠️ IMPLEMENT */
const atoi = (intAsString) => {
	// Store the integer value of the string and initialize to 0
	let result = 0;

	// Keep track of the current index in the string and initialize to 0
	let index = 0;

	// Create boolean variable to keep track if integer is positive or negative
	let isPositive = true;

	// If the input string is a negative number
	if (intAsString[0] === "-") {
		// Increment the starting index to 1
		index++;
		// Set boolean isPositive to false
		isPositive = false;
	}

	// Iterate through the input string
	for (; index < intAsString.length; index++) {
		// Convert the character to its ASCII code using the charCodeAt method
		const asciiCode = intAsString.charCodeAt(index);
		// Subtract 48 from the ASCII code to get the integer value of the character
		const integerValueOfChar = asciiCode - 48;
		// Multiply the result variable by 10 and add the integer value of the character.
		// This effectively shifts the existing digits of result one place to the left and adds the new digit on the right.
		result = result * 10 + integerValueOfChar;
	}

	// If integer is positive return the result else return the product of the result times -1
	return isPositive ? result : result * -1;
};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/

// All test cases return true
console.log(atoi("0") === 0);
console.log(atoi("1") === 1);
console.log(atoi("0") === 0);
console.log(atoi("4") === 4);
console.log(atoi("00") === 0);
console.log(atoi("01") === 1);
console.log(atoi("-1") === -1);
console.log(atoi("007") === 7);
console.log(atoi("10") === 10);
console.log(atoi("001") === 1);
console.log(atoi("0001") === 1);
console.log(atoi("010") === 10);
console.log(atoi("00001") === 1);
console.log(atoi("100") === 100);
console.log(atoi("123") === 123);
console.log(atoi("600") === 600);
console.log(atoi("0100") === 100);
console.log(atoi("-234") === -234);
console.log(atoi("00500") === 500);
console.log(atoi("1000") === 1000);
console.log(atoi("01000") === 1000);
console.log(atoi("001000") === 1000);
console.log(atoi("0001000") === 1000);
console.log(atoi("00001000") === 1000);
