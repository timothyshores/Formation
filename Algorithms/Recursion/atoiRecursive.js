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
const atoi = (intAsString) => {
	if (intAsString.length === 0) return NaN;

	let sign = 1;

	if (intAsString[0] === "-") {
		sign = -1;
		intAsString = intAsString.substring(1);
	}

	const digit = intAsString.charCodeAt(0) - 48;

	const restOfString = intAsString.substring(1);

	if (restOfString.length === 0) {
		return sign * digit;
	} else {
		return (
			sign * (digit * Math.pow(10, restOfString.length) + atoi(restOfString))
		);
	}
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
console.log(Number.isNaN(atoi("")));
console.log(atoi("01000") === 1000);
console.log(atoi("001000") === 1000);
console.log(atoi("0001000") === 1000);
console.log(atoi("00001000") === 1000);
