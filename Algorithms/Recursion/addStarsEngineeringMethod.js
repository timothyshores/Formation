/*
❓ PROMPT
Given a string, insert a star (*) between each character.

Example(s)
addStars("hello") == "h*e*l*l*o"
addStars("abc") == "a*b*c"
addStars("ab") == "a*b"

🔎 EXPLORE
State your assumptions & discoveries:
· Add a star in between every character excluding the empty string and single character strings
· Input can be an empty string
· There be capital letters, special characters, and numbers

Create examples & test cases:
console.log(addStars("") === "");
console.log(addStars("1") === "1");
console.log(addStars("2") === "2");
console.log(addStars("3") === "3");
console.log(addStars("a") === "a");
console.log(addStars("A") === "A");
console.log(addStars("z") === "z");
console.log(addStars("Z") === "Z");
console.log(addStars("12") === "1*2");
console.log(addStars("23") === "2*3");
console.log(addStars("ab") === "a*b");
console.log(addStars("ba") === "b*a");
console.log(addStars("AA") === "A*A");
console.log(addStars("123") === "1*2*3");
console.log(addStars("abc") === "a*b*c");
console.log(addStars("hello") === "h*e*l*l*o");

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion and a helper method to add a * between every character
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Create a variable for the final output called withStars and set it equal to an empty string
· Create a helper method the accepts an index as it's parameter
    · Add the current character followed by a star if the current character is NOT the last character
    · If the current character IS the last character then we do NOT add a string
· Call the helper method
· Return withStars

🛠️ IMPLEMENT */
const addStars = (word) => {
	if (word === "") return "";
	let withStars = "";

	const helper = (index = 0) => {
		withStars += index < word.length - 1 ? word[index] + "*" : word[index];
		if (index == word.length - 1) return;
		helper(index + 1);
	};

	helper();
	return withStars;
};

/* 
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(addStars("") === "");
console.log(addStars("1") === "1");
console.log(addStars("2") === "2");
console.log(addStars("3") === "3");
console.log(addStars("a") === "a");
console.log(addStars("A") === "A");
console.log(addStars("z") === "z");
console.log(addStars("Z") === "Z");
console.log(addStars("12") === "1*2");
console.log(addStars("23") === "2*3");
console.log(addStars("ab") === "a*b");
console.log(addStars("ba") === "b*a");
console.log(addStars("AA") === "A*A");
console.log(addStars("123") === "1*2*3");
console.log(addStars("abc") === "a*b*c");
console.log(addStars("hello") === "h*e*l*l*o");
