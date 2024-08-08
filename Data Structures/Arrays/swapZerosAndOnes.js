/*

Given an array of 0s and 1s, what is the minimum number of moves needed to group all 0s on one side and 1s on the other side. A "move" is a swap between any adjacent positions.

EXAMPLE(S)
[0, 1] => 0, no swaps are needed since they are already grouped.
[0, 1, 0] => 1, swap 1 with either 0 to group them.
[1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.


The problem can be solved without actually performing any swaps. Instead, we can calculate the minimum number of moves needed.

Two Possible Scenarios:
1. Move all 0s to the left (which automatically puts all 1s on the right)
2. Move all 1s to the left (which automatically puts all 0s on the right)

We calculate both scenarios and take the minimum.

How it works:
1. Find the current positions (indices) of all 0s (or 1s).
2. Calculate how far each 0 (or 1) needs to move to reach its "ideal" position.
3. Calculuate the total sum up all these moves.

For example, if we're moving 0s left:
- The first 0 should be at index 0
- The second 0 should be at index 1
- The third 0 should be at index 2, and so on

The number of moves for each 0 is just: its current position - its ideal position

Why this works:
- Moving a 0 left is the same as swapping it with 1s to its left
- By calculating how far left each 0 needs to move, we're indirectly calculating the number of swaps

We do this calculation twice: once for 0s and once for 1s, then take the smaller result.

Time Complexity: O(n) - we go through the array twice at most
Space Complexity: O(n) - in the worst case, we store the indices of half the array

This approach is efficient because it avoids actually performing the swaps
and instead focuses on the end goal: how many positions each element needs to move.

*/

const getIndicesOfVal = (arr, val) => arr.map((el, index) => (el === val ? index : -1)).filter((index) => index !== -1);

const numberOfSwaps = (arr, val) =>
  getIndicesOfVal(arr, val).reduce((swaps, indexOfValue, i) => swaps + indexOfValue - i, 0);

const minSwaps = (input) => Math.min(numberOfSwaps(input, 0), numberOfSwaps(input, 1));

// All test cases return true
console.log(minSwaps([0, 1]) === 0); // 0
console.log(minSwaps([0, 1, 0]) === 1); // 1
console.log(minSwaps([1, 0, 1, 1, 0]) == 2); // 2
console.log(minSwaps([0, 0, 0, 0, 1]) === 0); // 0
console.log(minSwaps([0, 0, 1, 0, 0]) === 2); // 2
console.log(minSwaps([0, 1, 0, 0, 0]) === 1); // 1
console.log(minSwaps([1, 0, 0, 0, 0]) === 0); // 0
console.log(minSwaps([1, 0, 0, 0, 1, 0]) === 3); // 3
