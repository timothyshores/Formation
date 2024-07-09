/*

❓ PROMPT
Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

ND matrix

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
- Input is an array
- Every element in the array is either an integer or an array of integers
  - Subarrays can contain either integers or sub-subarrays of integers, etc.

Insightful & revealing test cases:

sumNestedList([]) == 0
sumNestedList([[]]) == 0
sumNestedList([[[]]]) == 0

sumNestedList([1]) == 1
sumNestedList([1, 0]) == 1
sumNestedList([0, 1]) == 1
sumNestedList([[0][1]]) == 1
sumNestedList([[1][0]]) == 1
sumNestedList([[1][1]]) == 2
sumNestedList([[1]]) == 1
sumNestedList([[1], [1]]) == 2
sumNestedList([[[1],[1]]]) == 2

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion with for loop
Time: O(N) where N is the number of elements
Space: O(D) where D is the depth of the number of nested arrays
 

📆 PLAN
Outline of algorithm #: 1

Initialize sum variable to 0

Iterate through all elements in the array
- Check if current element is either an integer or an array
  - If current element is an integer
    - Add the current number to the sum and continue iterating
  - Else current element is an array of integers
    - Call the recursive function on the current array of integers
    - Add the sum of the subarray of integers to the sum and continue iterating
 
Return the sum

*/

const sumNestedList = (list) => {
  let sum = 0;

  for (const element of list) {
    sum += Number.isInteger(element) ? element : sumNestedList(element);
  }

  return sum;
};

const sumNestedListWithDepth = (list, depth = 1) => {
  let sum = 0;

  for (const element of list) {
    sum += Number.isInteger(element) ? element : sumNestedListWithDepth(element, depth + 1);
  }

  return sum * depth;
};

// All test cases return true
console.log(sumNestedList([1, 2, 3]) == 6);
console.log(sumNestedList([1, [2, 3]]) == 6);
console.log(sumNestedList([1, [2, [3]]]) == 6);
console.log(sumNestedList([1, [1, 2, 3], 3]) == 10);
console.log(sumNestedList([1, [1, [1, [1, [1]]]]]) == 5);
console.log(sumNestedList([1, [1, [2], [], [], [], 3], 3]) == 10);
console.log(sumNestedList([1, [1, [2], [], [[[[]]]], [], 3], 3]) == 10);
console.log(sumNestedList([1]) == 1);
console.log(sumNestedList([[1]]) == 1);
console.log(sumNestedList([[[1]]]) == 1);
console.log(sumNestedList([[[[1]]]]) == 1);
console.log(sumNestedList([[[[]]]]) == 0);
console.log(sumNestedListWithDepth([1, 2, 3]) == 6);
console.log(sumNestedListWithDepth([1, [2, 3]]) == 11);
console.log(sumNestedListWithDepth([1, [2, [3]]]) == 23);
console.log(sumNestedListWithDepth([1, [1, 2, 3], 3]) == 16);
console.log(sumNestedListWithDepth([1, [1, [1, [1, [1]]]]]) == 153);
console.log(sumNestedListWithDepth([1, [1, [2], [], [], [], 3], 3]) == 24);
console.log(sumNestedListWithDepth([1, [1, [2], [], [[[[]]]], [], 3], 3]) == 24);
console.log(sumNestedListWithDepth([1]) == 1);
console.log(sumNestedListWithDepth([[1]]) == 2);
console.log(sumNestedListWithDepth([[[1]]]) == 6);
console.log(sumNestedListWithDepth([[[[1]]]]) == 24);
console.log(sumNestedListWithDepth([[[[]]]]) == 0);
