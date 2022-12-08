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
