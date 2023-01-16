/*

❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1

🔎 EXPLORE
State your assumptions & discoveries:
· We want to count the number of times that we find "aba" in the input string
    · Where the first and third character are the same and separated by a middle second character

Create examples & test cases:

console.log(countSkippedPairs("") === 0);
console.log(countSkippedPairs("") === 0);
console.log(countSkippedPairs("a") === 0);
console.log(countSkippedPairs("A") === 0);
console.log(countSkippedPairs("1") === 0);
console.log(countSkippedPairs("aa") === 0);
console.log(countSkippedPairs("ab") === 0);
console.log(countSkippedPairs("AB") === 0);
console.log(countSkippedPairs("12") === 0);
console.log(countSkippedPairs("hi") === 0);
console.log(countSkippedPairs("aba") === 1);
console.log(countSkippedPairs("aaa") === 1);
console.log(countSkippedPairs("ABA") === 1);
console.log(countSkippedPairs("121") === 1);
console.log(countSkippedPairs("axa") === 1);
console.log(countSkippedPairs("ABAb") === 1);
console.log(countSkippedPairs("abaB") === 1);
console.log(countSkippedPairs("ABAB") === 2);
console.log(countSkippedPairs("abab") === 2);
console.log(countSkippedPairs("1212") === 2);
console.log(countSkippedPairs("axax") === 2);
console.log(countSkippedPairs("axbx") === 1);
console.log(countSkippedPairs("hihih") === 3);
console.log(countSkippedPairs("ihihhh") === 3);
console.log(countSkippedPairs("ihjxhh") === 0);
console.log(countSkippedPairs("aaaaaaaa") === 6);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Recursion helper method and index based pointed
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Create a helper method to keep track of the current index
· Base case is where index is greater than or equal to the second to last character in the string
    · Need at least 3 characters based on the definition of a skipped pair
    · If this scenario occurs return 0
· Recursive case is checking the first and third character of the word argument
    · If the first and third character are the same 
        · Add 1 to our total sum and call the function again with index + 1
    · If the first and third character are different then we call the function again
        · Call the function again with index + 1
· Continue calling the recursive case 
    · Recursion ends when we hit our base case and the pointer is at the second to last character
· Call our helper method with the word argument and index 0

🛠️ IMPLEMENT
*/

const countSkippedPairs = (word) => {
	let count = 0;

	const helper = (index = 0) => {
		if (index >= word.length - 2) return;
		if (word[index] === word[index + 2]) count++;
		return helper(index + 1);
	};

	helper();

	return count;
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(countSkippedPairs("") === 0);
console.log(countSkippedPairs("a") === 0);
console.log(countSkippedPairs("A") === 0);
console.log(countSkippedPairs("1") === 0);
console.log(countSkippedPairs("aa") === 0);
console.log(countSkippedPairs("ab") === 0);
console.log(countSkippedPairs("AB") === 0);
console.log(countSkippedPairs("12") === 0);
console.log(countSkippedPairs("hi") === 0);
console.log(countSkippedPairs("aba") === 1);
console.log(countSkippedPairs("aaa") === 1);
console.log(countSkippedPairs("ABA") === 1);
console.log(countSkippedPairs("121") === 1);
console.log(countSkippedPairs("axa") === 1);
console.log(countSkippedPairs("ABAb") === 1);
console.log(countSkippedPairs("abaB") === 1);
console.log(countSkippedPairs("ABAB") === 2);
console.log(countSkippedPairs("abab") === 2);
console.log(countSkippedPairs("1212") === 2);
console.log(countSkippedPairs("axax") === 2);
console.log(countSkippedPairs("axbx") === 1);
console.log(countSkippedPairs("hihih") === 3);
console.log(countSkippedPairs("ihihhh") === 3);
console.log(countSkippedPairs("ihjxhh") === 0);
console.log(countSkippedPairs("aaaaaaaa") === 6);
