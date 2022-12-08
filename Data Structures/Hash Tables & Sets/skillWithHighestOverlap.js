// Prompt
// Given an input dictionary mapping from the name of Fellows to their numerical skill rating, return the skill rating with the highest number of Fellows.

// Expected Time Complexity: O(N) to iterate through N dictionary entries
// Expected Space Complexity: O(N) to store up to N skill levels

// Example
// {"oliver": 3, "pixel": 1, "pinky": 3} => 3

const highestSkillOverlap = (fellowSkills) => {
	if (fellowSkills.size === 0) return null;

	const skillRatings = Object.values(fellowSkills);
	const skillMap = {};

	let maxCount = 0;
	let mostFrequentSkillRating;

	for (const skill of skillRatings) {
		skillMap[skill] = (skillMap[skill] || 0) + 1;
		if (skillMap[skill] > maxCount) {
			maxCount = skillMap[skill];
			mostFrequentSkillRating = skill;
		}
	}

	return mostFrequentSkillRating;
};

// empty dictionary
console.log(highestSkillOverlap(new Map()) === null); // true

// one element dictionary
console.log(highestSkillOverlap({ pinky: 1 }) === 1); // true
console.log(highestSkillOverlap({ pixel: 2 }) === 2); // true
console.log(highestSkillOverlap({ oliver: 3 }) === 3); // true

// dictionary with all the same value
console.log(highestSkillOverlap({ oliver: 3, tobey: 3 }) === 3); // true

// dictionary with one pair and unique values
console.log(
	highestSkillOverlap({ oliver: 3, pinky: 1, pixel: 2, tobey: 1 }) === 1
); // true

// dictionary with unique values
let oneOfEachSkillRating = { oliver: 3, pinky: 4, pixel: 2, tobey: 1 };
console.log(
	highestSkillOverlap(oneOfEachSkillRating) >= 1 &&
		highestSkillOverlap(oneOfEachSkillRating) <= 4
); // true

// dictionary with equally repeated pair values
let twoRatingsForEverySkillLevel = {
	jess: 1,
	zoe: 1,
	paavo: 2,
	jono: 2,
	tony: 3,
	angus: 3,
};
console.log(
	highestSkillOverlap(twoRatingsForEverySkillLevel) >= 1 &&
		highestSkillOverlap(twoRatingsForEverySkillLevel) <= 3
); // true
