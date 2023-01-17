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
State your assumptions & discoveries:
· We want to return the total sum in sumNestedList
· We also want to return the total sum in sumNestedList but multiple each element by it's respected depth
· In sumNestedListWithDepth we multiple each value by it's depth

Create examples & test cases:

console.log(sumNestedList([]) === 0);
console.log(sumNestedList([[]]) === 0);
console.log(sumNestedList([[[]]]) === 0);
console.log(sumNestedList([[], []]) === 0);

console.log(sumNestedListWithDepth([1]) === 1);
console.log(sumNestedListWithDepth([[1]]) === 2);
console.log(sumNestedListWithDepth([[[1]]]) === 6);
console.log(sumNestedListWithDepth([1, [1]]) === 3);
console.log(sumNestedListWithDepth([1, 2, 3]) === 6);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion add the integers and then call the function recursively if there's another array in the array
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Loop through the array using a for loop
· Each element is either an integer or an array of integers
    · If the element is an integer add it to the sum
    · If the element is an array of integers
        · Recursively call the function and pass in the sub-array
· After all element have been traversed return the sum
· In sumNestedListWithDepth we want to multiple each value by it's respective depth

🛠️ IMPLEMENT */
const sumNestedList = (list) => {
	let sum = 0;

	for (element of list) {
		if (typeof element === "number") sum += element;
		if (Array.isArray(element)) sum += sumNestedList(element);
	}

	return sum;
};

function sumNestedListWithDepth(list, depth = 2) {
	let sum = 0;

	for (let element of list) {
		if (typeof element === "number") sum += element;
		if (Array.isArray(element))
			sum += sumNestedListWithDepth(element, depth + 1) * depth;
	}

	return sum;
}

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(sumNestedList([]) === 0);
console.log(sumNestedList([1]) === 1);
console.log(sumNestedList([[]]) === 0);
console.log(sumNestedList([[1]]) === 1);
console.log(sumNestedList([[[]]]) === 0);
console.log(sumNestedList([[[1]]]) === 1);
console.log(sumNestedList([[], []]) === 0);
console.log(sumNestedList([1, [1]]) === 2);
console.log(sumNestedList([1, 2, 3]) === 6);
console.log(sumNestedList([1, [1, 1]]) === 3);
console.log(sumNestedList([1, [2, 3]]) === 6);
console.log(sumNestedList([1, [2, [3]]]) === 6);
console.log(sumNestedList([1, [1, 1], 1]) === 4);
console.log(sumNestedList([1, [1, 2, 3], 3]) === 10);
console.log(sumNestedList([1, [1, [1], 1], 1]) === 5);
console.log(sumNestedList([1, [1, [1, 1], 1], 1]) === 6);
console.log(sumNestedList([1, [1, [1, [1, [1]]]]]) === 5);
console.log(sumNestedList([1, [1, [2], [], [], [], 3], 3]) === 10);
console.log(sumNestedList([1, [1, [2], [], [[[[]]]], [], 3], 3]) === 10);
