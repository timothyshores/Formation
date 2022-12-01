// Prompt
// We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

// Expected Time Complexity: O(N) to iterate through N dictionary entries
// Expected Space Complexity: O(N) to store up to N resulting Fellows

const earliestFellows = (fellowTimes) => {
	const min = Math.min(...Object.values(fellowTimes));
	const fellows = Object.entries(fellowTimes);
	const earliestFellows = [];

	for (let [fellowName, time] of fellows) {
		if (time === min) earliestFellows.push(fellowName);
	}

	return earliestFellows;
};

// empty dictionary
console.log(JSON.stringify(earliestFellows(new Map())) === JSON.stringify([]));

// one element dictionary
let map = { oliver: 3 };
console.log(
	JSON.stringify(earliestFellows(map)) === JSON.stringify(["oliver"])
);

// dictionary with all the same value
map = { oliver: 3, tobey: 3 };
console.log(
	JSON.stringify(earliestFellows(map)) === JSON.stringify(["oliver", "tobey"])
);

// dictionary with unique values
map = { oliver: 3, pinky: 4, pixel: 2, tobey: 1 };
console.log(JSON.stringify(earliestFellows(map)) === JSON.stringify(["tobey"]));

// dictionary with mixed, repeated values
map = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };
console.log(
	JSON.stringify(earliestFellows(map)) === JSON.stringify(["pinky", "tobey"])
);

map = { tony: 3, jess: 1, paavo: 2, zoe: 1, ariel: 2, jono: 1, angus: 3 };
console.log(
	JSON.stringify(earliestFellows(map)) ===
		JSON.stringify(["jess", "zoe", "jono"])
);
