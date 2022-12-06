// A bug in the Formation session tool accidentally duplicated some Fellows in sessions. Given an array of names representing Fellows in a session, return an array of the distinct Fellows. The array must be in the same order as the input.

// Follow-up question:
// How would removing the Fellows in place, instead of using a new output array, affect the algorithm's runtime?

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
