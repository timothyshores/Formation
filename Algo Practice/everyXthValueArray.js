/*

❓ PROMPT
Given an array and a number *X*, return an array containing every *X*th number in the input array.

Example(s)
everyXth([1,2,3,4,5,6], 2) == [2,4,6]
everyXth([1,2,3,4,5,6], 3) == [3,6]

🔎 EXPLORE
List your assumptions & discoveries:
- Start at index -1 and add X to get the first element in the results array
  everyXth(arr, 2) = (arr[1], arr[3], arr[5], ...)
  everyXth(arr, 3) = (arr[2], arr[5], arr[8], ...)


Insightful & revealing test cases:

everyXth([1,2,3], 3) == [3]
everyXth([1,2,3], 4) == [0]

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Initialize empty array, for loop where i += x, push to array and return
Time: O(N) technically N / X to iterate through the array 
Space: O(N) technically N / X elements in the output array
 
Algorithm 2: Same as algorithm 1 but recursively iterate through array

Time: O(N) technically N / X to iterate through the array 
Space: O(N) technically N / X elements in the output array

📆 PLAN
Outline of algorithm #: 1

- Intialize empty array called results
- For loop starting at X - 1; x < inputArr.length; i += X
  - Push the current element into the array
- Return the array

Outline of algorithm #: 2
 
- Initalize an empty array called results
- Initialze a helper function that recieves an index as an input
  - Base case: 
    - index > inputArr.length return
  - Recursive case:
    - index < inputArr.length
    - push the current element into the results array
    - call the helper function with current index + X
- Call the helper function start at index X - 1
- Return the array


🛠️ IMPLEMENT

*/

const everyXthFor = (arr, x) => {
  const results = [];

  for (let i = x - 1; i < arr.length; i += x) {
    results.push(arr[i]);
  }

  return results;
};

const everyXthRecursive = (arr, x) => {
  const results = [];

  const helper = (index) => {
    if (index >= arr.length) return;
    results.push(arr[index]);
    helper(index + x);
  };

  helper(x - 1);
  return results;
};

const forLoopToString = (arr, x) => JSON.stringify(everyXthFor(arr, x));

// All test cases return true
