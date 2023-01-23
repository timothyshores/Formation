/*

❓ PROMPT
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

Example(s)
countX("xxhixx") == 4
countX("xhixhix") == 3
countX("hi") == 0

🔎 EXPLORE
State your assumptions & discoveries:
· Return the number of lowwercase 'x's contained within a string

Create examples & test cases:

console.log(countX("") === 0);
console.log(countX("a") === 0);
console.log(countX("b") === 0);
console.log(countX("c") === 0);
console.log(countX("x") === 1);
console.log(countX("y") === 0);
console.log(countX("z") === 0);
console.log(countX("X") === 0);
console.log(countX("xa") === 1);
console.log(countX("ax") === 1);
console.log(countX("xx") === 2);
console.log(countX("xxx") === 3);
console.log(countX("xaxb") === 2);
console.log(countX("axbx") === 2);
console.log(countX("xxxx") === 4);
console.log(countX("xxxxx") === 5);
console.log(countX("xaxbxc") === 3);
console.log(countX("axbxcx") === 3);
console.log(countX("xaxbxcxd") === 4);
console.log(countX("axbxcxdx") === 4);
console.log(countX("xaxbxcxdxe") === 5);
console.log(countX("axbxcxdxex") === 5);
console.log(countX("xxxxxxxxxx") === 10);
console.log(countX("abcdefghijklmnopqrstuvwyz") === 0);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
· Use recursion and a helper method that takes an index number as a parameter
· Check the first character 
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Handle edge case when empty string is passed in as an argument
· Create and initialize a count variable to zero
· Create helper function that takes in an index number as an input    
    · Look at the character at the given index
    · If the current character is the letter 'x' then increment count by one
    · Call the helper method again but with the next index
    · If the index is equal to the length of the input string 
        · All characters in the string have been examined and counted if they contain 'x'
        · Return the function
· Call helper function
· Return the count variable

🛠️ IMPLEMENT */
const countX = (word) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
