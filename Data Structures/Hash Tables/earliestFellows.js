// Prompt
// We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

// Expected Time Complexity: O(N) to iterate through N dictionary entries
// Expected Space Complexity: O(N) to store up to N resulting Fellows

const earliestFellows = (fellowTimes) => {

}

// empty dictionary
// one element dictionary
// dictionary with all the same value
// dictionary with unique values
// dictionary with mixed, repeated values


console.log(JSON.stringify(earliestFellows(new Map())) === JSON.stringify([]));

let map = { oliver: 3 };
console.log(
	JSON.stringify(earliestFellows(map)) === JSON.stringify(["oliver"])
);

map = { oliver: 3, tobey: 3 };
console.log(
	JSON.stringify(earliestFellows(map)) === JSON.stringify(["oliver", "tobey"])
);

map = { oliver: 3, pinky: 4, pixel: 2, tobey: 1 };
console.log(JSON.stringify(earliestFellows(map)) === JSON.stringify(["tobey"]));

map = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };
console.log(
	JSON.stringify(earliestFellows(map)) === JSON.stringify(["pinky", "tobey"])
);

map = { tony: 3, jess: 1, paavo: 2, zoe: 1, ariel: 2, jono: 1, angus: 3 };
console.log(
	JSON.stringify(earliestFellows(map)) ===
		JSON.stringify(["jess", "zoe", "jono"])
);