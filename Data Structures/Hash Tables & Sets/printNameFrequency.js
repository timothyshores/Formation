// You're given a comma-separated string of names, and you want to print how many times each name appeared. For each person that appears, you should print a string {name} appeared {x} times., in order of appearance.
// To properly compare results in the test suite, return an array of strings joined by a newline as the result of your method.

// Expected Time Complexity: O(N) to iterate through N names in the string
// Expected Space Complexity: O(N) to store up to N names

// Examples
// console.log(printNameFreq("Tony, Jessica, Paavo, Jessica, Tony, Zoe") ==
// "Tony appeared 2 times.\n\
// Jessica appeared 2 times.\n\
// Paavo appeared 1 time.\n\
// Zoe appeared 1 time.")
// console.log(printNameFreq("") == "Nobody appeared.")

const printNameFreq = (names) => {
	if (names.length === 0) return "Nobody appeared.";

	const namesArray = names.split(", ");

	if (namesArray.length === 1) return `${namesArray[0]} appeared 1 time.`;

	const namesMap = {};

	for (const name of namesArray) {
		namesMap[name] = (namesMap[name] || 0) + 1;
	}

	let namesString = "";

	for (const [name, count] of Object.entries(namesMap)) {
		namesString += `${name} appeared ${count} ${(timeOrTimes =
			count === 1 ? "time" : "times")}.\n`;
	}

	return namesString.substring(0, namesString.length - 1);
};

// empty string
console.log(printNameFreq("") === "Nobody appeared."); // true

// 1 name
console.log(printNameFreq("Tim") === "Tim appeared 1 time."); // true

// all unique names
console.log(printNameFreq("Tony, Jessica")); // "Tony appeared 1 time.\n Jessica appeared 1 time."
console.log(printNameFreq("Tony, Jessica, Paavo")); // "Tony appeared 1 time.Jessica appeared 1 time. Paavo appeared 1 time.
console.log(printNameFreq("Tony, Jessica, Paavo, Jessica")); // / "Tony appeared 1 time. Jessica appeared 2 times. Paavo appeared 1 time.";

// duplicate names
console.log(printNameFreq("Tony, Jessica, Paavo, Jessica, Tony")); // "Tony appeared 2 times. Jessica appeared 2 times. Paavo appeared 1 time.";

console.log(printNameFreq("Tony, Jessica, Paavo, Jessica, Tony, Zoe")); /// "Tony appeared 2 times. Jessica appeared 2 times. Paavo appeared 1 time. Zoe appeared 1 time.";

// all the same name
console.log(printNameFreq("Tim, Tim") == "Tim appeared 2 times."); /// true
console.log(printNameFreq("Tim, Tim, Tim") == "Tim appeared 3 times."); /// true
console.log(printNameFreq("Tim, Tim, Tim, Tim") == "Tim appeared 4 times."); /// true
console.log(
	printNameFreq("Tim, Tim, Tim, Tim, Tim") == "Tim appeared 5 times."
); /// true
