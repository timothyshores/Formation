/*

❓ PROMPT
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence (lowest index).

Example(s)
findMinIndex([12, 1234, 45, 67, 1]) == 4
findMinIndex([10, 20, 30]) == 0
findMinIndex([8, 6, 7, 5, 3, 7]) == 4

findMaxIndex([12, 1234, 45, 67, 1]) == 1
findMaxIndex([10, 20, 30]) == 2
findMaxIndex([8, 6, 7, 5, 3, 7]) == 0
 
If input array is empty return undefined


🔎 EXPLORE
List your assumptions & discoveries:
- When arr.length === 0 return undefined
- When arr.length === 1 return 0
- When arr.length === 2
  - Initialize a 2 variables minIndex = 0 and minValue = arr[0]
  - Compare the two values and return the index of the min value

Insightful & revealing test cases:

findMinIndex([]) == 0
findMinIndex([1]) == 0
findMinIndex([1, 2]) == 0
findMinIndex([2, 1]) == 1

findMaxIndex([]) == 0
findMaxIndex([1]) == 0
findMaxIndex([2, 1]) == 0
findMaxIndex([1, 2]) == 1

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N) where N is the number of elements in the array
Space: O(N)
 
*/

const findMinIndex = (arr) => {
  if (!arr) return undefined;

  let minIndex = 0;
  let minValue = arr[0];

  const helper = (index) => {
    if (index === arr.length) return;

    const currValue = arr[index];
    if (currValue < minValue) {
      minValue = currValue;
      minIndex = index;
    }

    helper(index + 1);
  };

  helper(0);
  return minIndex;
};

const findMaxIndex = (arr) => {
  if (!arr) return undefined;

  let maxIndex = 0;
  let maxValue = arr[0];

  const helper = (index) => {
    if (index === arr.length) return;

    const currValue = arr[index];
    if (currValue > maxValue) {
      maxValue = currValue;
      maxIndex = index;
    }

    helper(index + 1);
  };

  helper(0);
  return maxIndex;
};

// All test cases return true
console.log("\nfindMinIndex");
console.log(findMinIndex([]) === 0);
console.log(findMinIndex([1]) === 0);
console.log(findMinIndex([1, 2]) === 0);
console.log(findMinIndex([2, 1]) === 1);
console.log(findMinIndex([10, 20, 30]) === 0);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) === 4);
console.log(findMinIndex([12, 1234, 45, 67, 1]) === 4);
console.log(findMinIndex([10, 20, 30]) == 0);
console.log(findMinIndex([30, 20, 10]) == 2);
console.log(findMinIndex([20, 10, 30]) == 1);
console.log(findMinIndex([10, 20, 30, 10]) == 0);
console.log(findMinIndex([10, 10, 10, 10]) == 0);
console.log(findMinIndex([11]) == 0);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4);
console.log(findMinIndex([-10, -5, -3, -30]) == 3);
console.log(findMinIndex([15, 11]) == 1);
console.log(findMinIndex([15, 11, 12, 13, 14]) == 1);
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) == 3);

console.log("\nfindMaxIndex");
console.log(findMaxIndex([]) == 0);
console.log(findMaxIndex([1]) == 0);
console.log(findMaxIndex([2, 1]) == 0);
console.log(findMaxIndex([1, 2]) == 1);
console.log(findMaxIndex([10, 20, 30]) == 2);
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0);
console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1);
console.log(findMaxIndex([10, 20, 30]) == 2);
console.log(findMaxIndex([30, 20, 10]) == 0);
console.log(findMaxIndex([20, 10, 30]) == 2);
console.log(findMaxIndex([10, 20, 30, 10]) == 2);
console.log(findMaxIndex([10, 10, 10, 10]) == 0);
console.log(findMaxIndex([11]) == 0);
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0);
console.log(findMaxIndex([-10, -5, -3, -30]) == 2);
console.log(findMaxIndex([15, 11]) == 0);
console.log(findMaxIndex([15, 11, 12, 13, 14]) == 0);
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) == 1);
