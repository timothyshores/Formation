/*

❓ PROMPT
Given an array and a target count X, return the number of elements that is repeated exactly X times.

Example(s)
[1, 2, 3, 1, 2, 3], 2 == 3
[1, 2, 3, 1, 2, 3], 3 == 0
[1, 3, 3, 5, 5, 5, 5, 5, 3], 3 == 1
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Frequency counter pattern
Time: O(N)
Space: O(N)
 

📆 PLAN
Outline of algorithm #: 1

- Create a hash map frequency counter from the input array
  - Keys are the unique elements in the input array
  - Values are the counts or number of occurences of that value in the input array
- Iterate through the values or frequency counts in the frequency counter hash map
- Return the number of elements repeated exactly N number of times

*/

const createFreqMap = (arr) => {
  const freqMap = {};

  for (const num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  return freqMap;
};

const countExactOccurrences = (arr, exactOccurrences) =>
  Object.values(createFreqMap(arr)).filter(
    (count) => count === exactOccurrences
  ).length;

// All Test Cases return true

let arr = [1, 2, 3, 1, 2, 3];
console.log(countExactOccurrences(arr, 2) === 3);
console.log(countExactOccurrences(arr, 3) === 0);

arr = [1, 3, 3, 5, 5, 5, 5, 5, 3];
console.log(countExactOccurrences(arr, 1) === 1);
console.log(countExactOccurrences(arr, 3) === 1);
console.log(countExactOccurrences(arr, 5) === 1);

arr = [10, 10, 10, 10];
console.log(countExactOccurrences(arr, 1) === 0);
console.log(countExactOccurrences(arr, 3) === 0);
console.log(countExactOccurrences(arr, 4) === 1);
console.log(countExactOccurrences(arr, 6) === 0);

arr = [100];
console.log(countExactOccurrences(arr, 1) === 1);
console.log(countExactOccurrences(arr, 5) === 0);
console.log(countExactOccurrences(arr, 100) === 0);
