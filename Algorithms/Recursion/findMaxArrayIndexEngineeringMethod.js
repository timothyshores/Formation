/*
❓ PROMPT
Given an array, write a recursive functions to find the index of the maximum element in an array. If there's a tie-breaker, return the first occurrence.

Example(s)
findMaxIndex([12, 1234, 45, 67, 1]) == 1
findMaxIndex([10, 20, 30]) == 2
findMaxIndex([8, 6, 7, 5, 3, 7]) == 0

🔎 EXPLORE
State your assumptions & discoveries:
· Return the index of the element with the largest integer value in the input array 
· Array will always be at least 1 element to avoid having to throw an exception.
· Array may be sorted or unsorted

Create examples & test cases:

console.log(findMaxIndex([0]) === 0);
console.log(findMaxIndex([11]) === 0);
console.log(findMaxIndex([-1]) === 0);
console.log(findMaxIndex([15, 11]) === 0);
console.log(findMaxIndex([30, 20, 10]) === 0);
console.log(findMaxIndex([30, 99, 10]) === 1);
console.log(findMaxIndex([10, 20, 30]) === 2);
console.log(findMaxIndex([20, 10, 30]) === 2);
console.log(findMaxIndex([10, 10, 10, 10]) === 0);
console.log(findMaxIndex([10, 20, 30, 10]) === 2);
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) === 0);
console.log(findMaxIndex([-10, -5, -3, -30]) === 2);
console.log(findMaxIndex([15, 11, 12, 13, 14]) === 0);
console.log(findMaxIndex([12, 1234, 45, 67, 1]) === 1);
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) === 1);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion and a helper function that take in an integer to track current index
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Create a variable called maxIndex and set to zero
· Create a helper function that receives an index as a parameter
    · Base case: array is a single element or all elements have been visited
        · Break out of the helper function using the return keyword
    · Recursive case: when all elements in the array have not been visited
        · Compare the value of the current element to maxValue
        · If the current element is greater than maxValue
            · Update maxIndex to the current index
        · Call the helper function again passing in index + 1 
· Return maxIndex

🛠️ IMPLEMENT */
const findMaxIndex = (arr) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
