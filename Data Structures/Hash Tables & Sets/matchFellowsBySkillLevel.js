// Prompt
// Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

// Expected Runtime
// Time: O(N) to iterate through the length N dictionary
// Space: O(N) to store the skills to compare against

// Examples
// console.log(canMatchFellows({"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}) == True)
// console.log(canMatchFellows({"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}) == False)

const canMatchFellows = (dictionary) => {
	const ratingsSet = new Set();

	for (const rating of Object.values(dictionary)) {
		if (ratingsSet.has(rating)) {
			ratingsSet.delete(rating);
		} else {
			ratingsSet.add(rating);
		}
	}

	return ratingsSet.size === 0;
};

// empty dictionary
console.log(canMatchFellows({}) === true); // true

// odd-length dictionary
console.log(canMatchFellows({ oliver: 1 }) === false); // true
console.log(canMatchFellows({ oliver: 3, pixel: 3, pinky: 3 }) === false); // true
console.log(
	canMatchFellows({ oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1 }) ===
		false
); // true

// even-length dictionary
console.log(
	canMatchFellows({ oliver: 3, pixel: 4, pinky: 5, tobey: 5 }) === false
); // true

console.log(
	canMatchFellows({ oliver: 3, pixel: 4, pinky: 5, tobey: 5 }) === false
); // true

// even-length dictionary with paired skill levels
console.log(
	canMatchFellows({ oliver: 3, pixel: 3, pinky: 3, tobey: 3 }) === true
); // true

console.log(
	canMatchFellows({ oliver: 3, pixel: 3, pinky: 5, tobey: 5 }) == true
); // true
