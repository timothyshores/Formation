/*

❓ PROMPT
Given an array of ints, compute recursively if there's a value immediately followed by that value times 10 somewhere in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Example(s)
array10x([1, 2, 20], 0) == True
array10x([3, 30], 0) == True
array10x([3], 0) == False

🔎 EXPLORE
State your assumptions & discoveries:
· Want to check if there's an element in the array where it's value is 10x more than the element to it's left
· Every empty array and array with one element will return false

Create examples & test cases:

console.log(array10x([], 0)); // false
console.log(array10x([0], 0)); // false
console.log(array10x([1], 0)); // false
console.log(array10x([10], 0)); // false
console.log(array10x([0, 0], 0)); // true
console.log(array10x([1, 10], 0)); // true
console.log(array10x([10, 1], 0)); // false
console.log(array10x([-1, -10], 0)); // true
console.log(array10x([0, 1, 10], 0)); // true
console.log(array10x([1, 10, 0], 0)); // true
console.log(array10x([1, 2, 20], 0)); // true
console.log(array10x([-10, -1], 0)); // false

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */

/**
 * @param {Array<number>} arr - array of integers
 * @param {int} index - Current index
 */
const array10x = (arr, index = 0) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
