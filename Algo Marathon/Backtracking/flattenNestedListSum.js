/*

❓ PROMPT
Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

As a follow-up, modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array.

However, [4, [2, 3]] returns 14 because the depth of [2, 3] is 2, so (2+3) * 2 = 10.
4 is added at the end to get 10 + 4 = 14.
While [4, [2, [3]]] returns 26 because the depth of [3] is 3 so 3 * 3 = 9. 
Then the depth of [2, 9] is 2 so (2+9) * 2 = 22.
4 is added at the end to get  22 + 4 = 26.

Example(s)
sumNestedList([1, 2, 3]) == 6
sumNestedList([1, [1, 2, 3], 3]) == 10
sumNestedList([1, [1, [1, [1, [1]]]]]) == 5

sumNestedListWithDepth([4, [2, 3]]) == 14 because 4 + (2+3)*2
sumNestedListWithDepth([4, [2, [3]]]) == 26 because 4+(2+ (3*3))*2

🔎 EXPLORE
List your assumptions & discoveries:
- Return the sum of all values within the array

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N)
Space: O(1) assuming that the call stack in memory is not counted or else it would be O(N)

📆 PLAN
Outline of algorithm #: 1
- Initialize a sum variable to 0
- For loop iterate through the array
    - If the current element add it to the sum
    - If the current element is an array then call the function recursively and pass in the array
- After all elements have been visited then return the sum

🛠️ IMPLEMENT
function sumNestedList(list) {
function sumNestedListWithDepth(list) {

def sumNestedList(nestedList: list[int]) -> int:
def sumNestedListWithDepth(nestedList: list[int]) -> int:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

const sumNestedList = (list) => {
	let sum = 0;

	const helper = (arr) => {
		for (const element of arr) {
			if (Number.isInteger(element)) {
				sum += element;
			} else {
				helper(element);
			}
		}
	};

	helper(list);
	return sum;
};

const sumNestedListWithDepth = (array, depth = 1) => {
	let sum = 0;

	for (const element of array) {
		if (Number.isInteger(element)) {
			sum += element;
		} else {
			sum += sumNestedListWithDepth(element, depth + 1);
		}
	}

	return sum * depth;
};

// All test cases return true
console.log(sumNestedList([1]) == 1);
console.log(sumNestedList([[1]]) == 1);
console.log(sumNestedList([[[1]]]) == 1);
console.log(sumNestedList([1, 2, 3]) == 6);
console.log(sumNestedList([[[[]]]]) == 0);
console.log(sumNestedList([[[[1]]]]) == 1);
console.log(sumNestedList([1, [2, 3]]) == 6);
console.log(sumNestedList([1, [2, [3]]]) == 6);
console.log(sumNestedList([1, [1, 2, 3], 3]) == 10);
console.log(sumNestedList([1, [1, [1, [1, [1]]]]]) == 5);
console.log(sumNestedList([1, [1, [2], [], [], [], 3], 3]) == 10);
console.log(sumNestedList([1, [1, [2], [], [[[[]]]], [], 3], 3]) == 10);

console.log(sumNestedListWithDepth([1]) == 1);
console.log(sumNestedListWithDepth([[1]]) == 2);
console.log(sumNestedListWithDepth([[[1]]]) == 6);
console.log(sumNestedListWithDepth([[[[]]]]) == 0);
console.log(sumNestedListWithDepth([1, 2, 3]) == 6);
console.log(sumNestedListWithDepth([[[[1]]]]) == 24);
console.log(sumNestedListWithDepth([1, [2, 3]]) == 11);
console.log(sumNestedListWithDepth([1, [2, [3]]]) == 23);
console.log(sumNestedListWithDepth([1, [1, 2, 3], 3]) == 16);
console.log(sumNestedListWithDepth([1, [1, [1, [1, [1]]]]]) == 153);
console.log(sumNestedListWithDepth([1, [1, [2], [], [], [], 3], 3]) == 24);
console.log(
	sumNestedListWithDepth([1, [1, [2], [], [[[[]]]], [], 3], 3]) == 24
);
