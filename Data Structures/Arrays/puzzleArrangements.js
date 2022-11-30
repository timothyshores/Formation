// Prompt
// Given an array of integers representing puzzle pieces and an integer targetSize, return the number of arrangements whose size sums to targetSize.
// An arrangement is a contiguous, non-empty sequence of pieces within an array.

// Expected Time Complexity: O(N2), can you use a data structure to make this O(N) by iterating through the length N array only once?
// Expected Space Complexity: O(N) to store up to N elements

const puzzleArrangements = (pieces, targetSize) => {
	if (pieces.length === 1 && pieces[0] === targetSize) return 1;
	if (pieces.length < 2) return 0;

	// start both p1 & p2 at index 0
	let p1 = 0;
	let p2 = 0;
	let numberOfArrangements = 0;
	let currentSum = pieces[0];

	while (p1 < pieces.length) {
		// two pointer approach

		// if currentSum === target
		if (currentSum === targetSize) {
			numberOfArrangements++;
			// set p1 to p2's current location
			if (p1 < p2) {
				p1 = p2;
				// set p2 to equal p1 e.g.
				p2 = p1;
			} else if (p1 === p2) {
				p1 = p2 + 1;
				p2 = p1;
			}
			currentSum = pieces[p1];

			if (p1 === pieces.length - 1 && p2 === pieces.length - 1) break;
		}
		// if currentSum < target
		if (currentSum < targetSize) {
			// move p2 one index to the right
			p2++;
			if (p2 === pieces.length) break;
			currentSum += pieces[p2];
		}
		// if currentSum > target
		if (currentSum > targetSize) {
			// move p1 one index to the right
			currentSum -= pieces[p1];
			p1++;
			if (p1 === pieces.length) break;
		}
	}

	return numberOfArrangements;
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

// empty array
console.log(puzzleArrangements([], 1) === 0); // true
console.log(puzzleArrangements([], 2) === 0); // true

// 1-element array
console.log(puzzleArrangements([1], 1) === 1); // true
console.log(puzzleArrangements([1], 2) === 0); // true

// target > sum of entire array
console.log(puzzleArrangements([1, 2], 4) === 0); // true

// target == sum of entire array
console.log(puzzleArrangements([1, 2], 3) === 1); // true

// target == 1 element
console.log(puzzleArrangements([1, 2, 3, 20], 20) === 1); // true

// overlapping arrangements
console.log(puzzleArrangements([1, 1, 1], 2) === 2); // true

// disjoint arrangements
console.log(puzzleArrangements([100, 1, 100], 100) === 2); // true

// non-contiguous sums that add up to target
console.log(puzzleArrangements([1, 2, 3, 100, 1, 2, 3], 6) === 2); // true
