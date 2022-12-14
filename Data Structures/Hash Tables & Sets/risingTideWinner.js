// Prompt
// Given an array of Fellows representing nominations for a Rising Tide Award at Formation, return the name of the winning Fellow with the most number of nominations

// Expected Time Complexity: O(N) to iterate through the length N array
// Expected Space Complexity: O(N) to store up to N nominations

const risingTideWinner = (nominations) => {
	let map = {};

	for (const nomination of nominations) {
		map[nomination] = (map[nomination] || 0) + 1;
	}

	const maxValue = Math.max(...Object.values(map));

	const keysWithMaxValue = Object.keys(map).filter(
		(key) => map[key] === maxValue
	);

	if (keysWithMaxValue.length === 1) return keysWithMaxValue[0];
	if (keysWithMaxValue.length > 1) return keysWithMaxValue.sort().pop();
	return null;
};

// empty list
console.log(risingTideWinner([]) === null); // true

// 1-element list
console.log(risingTideWinner(["oliver"]) === "oliver"); // true

// all unique elements
console.log(risingTideWinner(["oliver", "bob", "sarah", "vlad"]) === "vlad"); // true

// 1 nominee with the most votes
console.log(risingTideWinner(["oliver", "pixel", "pinky", "pixel"]) == "pixel"); // true

// multiple nominees with the same number of votes
console.log(
	risingTideWinner([
		"zelenskyy",
		"oliver",
		"zelenskyy",
		"pixel",
		"pinky",
		"pixel",
	]) === "zelenskyy"
); // true
