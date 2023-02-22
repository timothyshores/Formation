/*

❓ PROMPT
Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that is greater or equal in value to all elements to its right.

Example(s)
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]

🔎 EXPLORE
State your assumptions & discoveries:
Given an array of integers return an array of integers where every integer in the final array is larger than all elements to it's right in the input array

Create examples & test cases:

console.log(find_left_peaks([])); // []
console.log(find_left_peaks([0])); // [0]
console.log(find_left_peaks([1])); // [1]
console.log(find_left_peaks([-1])); // [-1]
console.log(find_left_peaks([0, 1])); // [1]
console.log(find_left_peaks([1, 0])); // [1, 0]
console.log(find_left_peaks([1, 2])); // [2]
console.log(find_left_peaks([2, 1])); // [2, 1]
console.log(find_left_peaks([1, 2, 3])); // [3]
console.log(find_left_peaks([3, 2, 1])); // [3, 2, 1]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.

Approach 1: 

Brute force approach at every element we check every element to it's right
If the current element is greater than all other elements to it's right then push it into the left peaks results array
Check each element one by one from the left most element at index 0 to the right most elements at index arr.length - 1
Return the final left peaks results array

Time: O(N^2) for the first element we need to check n - 1 elements to it's right then n - 2, n - 3, ...., 3, 2, 1, 0 elements
Space: O(N) only store the final left peaks results array in memory

Approach 2: Create another array that matches the input array arr and store the current maximum of all elements to it's right and compare to input array arr

Time: O(N) Technically 2N because we need to iterate through the input array in reverse but linear time is far better than quadratic time in brute force solution
Space: O(N) Need N space for the precomputed maximums from the right to the left in addition to the final left peaks array

📆 PLAN
High-level outline of approach #: 2

🛠️ IMPLEMENT */
const find_left_peaks = (arr) => {};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/
