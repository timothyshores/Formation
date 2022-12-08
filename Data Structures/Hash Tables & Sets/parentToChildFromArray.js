// Prompt
// Given an array of arrays representing relations  child, parent1, and parent2 in each row, print a string representing all children of each parent.
// For example: Ben is the parent of James, Jen. The formatting doesn't matter, as long as all children are represented in the final output.

// Expected Runtime O(n), where n = # of rows/relations
// Examples
// Input: []
// Output: 'No family relations'

// Input: [
//   ["James", "Ben", "Lisa"],
//   ["George", "Taylor", "Fred"],
//   ["Jen", "Ben", "Gloria"]
// ]
// Output:
// 'Ben is the parent of James, Jen'
// 'Lisa is the parent of James'
// 'Taylor is the parent of George'
// 'Fred is the parent of George'
// 'Gloria is the parent of Jen'

const parentToChild = (relations) => {
	if (relations[0].length === 0) return "No family relations";

	// Want to create an object where the key is the parent and values are the children
	const parentToChild = {};

	// Need to iterate through each sub array within the relations input
	for (const [child, parent1, parent2] of relations) {
		parentToChild[parent1] = parentToChild[parent1]
			? [...parentToChild[parent1], child]
			: [child];

		parentToChild[parent2] = parentToChild[parent2]
			? [...parentToChild[parent2], child]
			: [child];
	}

	// Want our output to be Name is the part of child1, child2, child3, ..., childK.

	const parentRelationships = [];
	// iterate through our parentToChild map
	for (let [parent, child] of Object.entries(parentToChild)) {
		// For every parent in the map we want to push the string parentName is the parent of childName
		parentRelationships.push(`${parent} is the parent of ${child}`);
	}

	// Join the array with a new line between each parent to child relationship
	return parentRelationships.join("\n");
};

// empty matrix
console.log(parentToChild([[]]) === "No family relations"); // true

// child with 2 parents
const relations1 = [["James", "Ben", "Lisa"]];
const results1 = parentToChild(relations1);

console.log(
	results1.includes("Ben is the parent of James") &&
		results1.includes("Lisa is the parent of James")
); // true

// parents with multiple children
const relations2 = [
	["James", "Ben", "Lisa"],
	["George", "Taylor", "Fred"],
	["Jen", "Ben", "Gloria"],
];

const results2 = parentToChild(relations2);

console.log(
	results2.includes("Ben is the parent of James,Jen") &&
		results2.includes("Lisa is the parent of James") &&
		results2.includes("Taylor is the parent of George") &&
		results2.includes("Fred is the parent of George") &&
		results2.includes("Gloria is the parent of Jen")
); // true

// parent with children with different parents

const relations3 = [
	["Justine", "Tony", "Jessica"],
	["Paavo", "Jessica", "Tony"],
	["Zoe", "Jessica", "Tony"],
	["Benana", "Ben", "Ana"],
	["Egg", "Rooster", "Hen"],
	["Eggart", "Duck", "Hen"],
	["Mule", "Horse", "Donkey"],
];

const results3 = parentToChild(relations3);

console.log(results3.includes("Tony is the parent of Justine,Paavo,Zoe")); // true
console.log(results3.includes("Jessica is the parent of Justine,Paavo,Zoe")); // true
console.log(results3.includes("Ben is the parent of Benana")); // true
console.log(results3.includes("Ana is the parent of Benana")); // true
console.log(results3.includes("Rooster is the parent of Egg")); // true
console.log(results3.includes("Hen is the parent of Egg,Eggart")); // true
console.log(results3.includes("Duck is the parent of Eggart")); // true
console.log(results3.includes("Horse is the parent of Mule")); // true
console.log(results3.includes("Donkey is the parent of Mule")); // true
