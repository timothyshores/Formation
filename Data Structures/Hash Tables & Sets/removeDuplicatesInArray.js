// A bug in the Formation session tool accidentally duplicated some Fellows in sessions. Given an array of names representing Fellows in a session, return an array of the distinct Fellows. The array must be in the same order as the input.

// Follow-up question:
// How would removing the Fellows in place, instead of using a new output array, affect the algorithm's runtime?

// If we modified the fellows input parameter array in place it could change the runtime from O(n) to O(n ^ 2)
// Say we have a large array that's strictly a single name duplicates N number of times
// If we found the 2nd element was a duplicate of the first element
// We would have to shift the 3rd element at index 2 to index 1
// The 4th element at index 3 to index 2
// We'd have to continue that process until we reached the end of the array
// This would be N - 1 number of swaps or shifts
// Now when we check the 3rd original element or the new 2nd element of the array
// This element is a duplicate of the first element
// Now we need to make N - 2 number of shifts or swaps
// This process would continue to N - 3 swaps, N - 4 swaps, N - 5 swaps and so on
// Ultimately this would result in O(N ^ 2) number of swaps
// If we store the results in a new array that uses O(N) space then we get O(N) linear time complexity

// Expected Time Complexity: O(N) to iterate through the length N array
// Expected Space Complexity: O(N) to store up to N elements

// Example
// ["oliver", "pixel", "oliver", "pinky"] will return ["oliver", "pixel", "pinky"]

const removeDuplicateFellows = (fellows) => {
	const uniqueFellows = [];
	let set = new Set();

	for (const fellow of fellows) {
		if (!set.has(fellow)) {
			set.add(fellow);
			uniqueFellows.push(fellow);
		}
	}

	return uniqueFellows;
};

// empty array
console.log(removeDuplicateFellows([]));

// 1-element array
console.log(removeDuplicateFellows(["oliver"])); // ["oliver"]

// all unique elements
console.log(removeDuplicateFellows(["oliver", "pixel"])); // ["oliver", "pixel"]
console.log(removeDuplicateFellows(["oliver", "pixel", "pinky"])); // ["oliver", "pixel", "pinky"]

// 1 duplicate
console.log(removeDuplicateFellows(["oliver", "oliver", "pixel", "pinky"])); // ["oliver", "pixel", "pinky"]
console.log(removeDuplicateFellows(["oliver", "pixel", "oliver", "pinky"])); // ["oliver", "pixel", "pinky"]
console.log(removeDuplicateFellows(["oliver", "pixel", "pinky", "oliver"])); // ["oliver", "pixel", "pinky"]
console.log(removeDuplicateFellows(["pixel", "oliver", "oliver", "pinky"])); // ["pixel", "oliver", "pinky"]

// some duplicates
console.log(removeDuplicateFellows(["oliver", "oliver", "pinky", "oliver"])); // ["oliver", "pinky"]
console.log(removeDuplicateFellows(["oliver", "pixel", "oliver", "oliver"])); // ["oliver", "pixel"]
console.log(removeDuplicateFellows(["oliver", "oliver", "oliver", "pixel"])); // ["oliver", "pixel"
console.log(removeDuplicateFellows(["pinky", "oliver", "oliver", "oliver"])); // ["pinky", "oliver"]

// all the same duplicate
console.log(removeDuplicateFellows(["oliver", "oliver"])); // ["oliver"]
console.log(removeDuplicateFellows(["oliver", "oliver", "oliver"])); // ["oliver"]
console.log(removeDuplicateFellows(["oliver", "oliver", "oliver", "oliver"])); // ["oliver"]
