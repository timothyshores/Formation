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
