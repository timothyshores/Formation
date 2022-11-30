// Prompt
// Given an array of integers representing puzzle pieces and an integer targetSize, return the number of arrangements whose size sums to targetSize.
// An arrangement is a contiguous, non-empty sequence of pieces within an array.

// Expected Time Complexity: O(N2), can you use a data structure to make this O(N) by iterating through the length N array only once?
// Expected Space Complexity: O(N) to store up to N elements

const puzzleArrangements = (pieces, targetSize) => {
};

// Example 1
// Input: pieces = [1,2,3], targetSize = 3
// Output: 2 =, because [1, 2] and [3] are valid arrangements

console.log(puzzleArrangements([1, 2, 3], 3) === 2); // true

// Example 2
// Input: pieces = [1,1,1], targetSize = 2
// Output: 2, because [1, 1] and [1, 1] are valid (albeit duplicate) arrangements

console.log(puzzleArrangements([1, 1, 1], 2) === 2); // true

// Example 3
// Input: pieces = [5, 3, 1, 4], targetSize = 8
// Output: 2, because [5, 3] and [3, 1, 4] are valid arrangements

console.log(puzzleArrangements([5, 3, 1, 4], 8) === 2); // true
