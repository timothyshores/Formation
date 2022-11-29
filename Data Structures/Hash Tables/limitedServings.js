// You're a bartender, and you have to look out for your patrons - you don't want them to drink too much. Assume everyone is having the same drink, and everyone has the same set amount of "allowed servings".

// Given an array of patrons (denoted by their names, eg: Adrian), and an integer value representing "allowed servings", return True if someone attempts to go over the allowed number of servings per person.

// Otherwise, False if no one drinks too much.

// Can you think of any data structures that might help?

// Expected Runtime
// Time: O(N) where N = # of total interactions (non-unique patrons)
// Space: O(N) to store up to N patrons

const limitedServings = (patrons, allowedServings) => {
	const patronsDrinksMap = {};

    for (patron of patrons) {        
        patronsDrinksMap[patron] = patronsDrinksMap[patron] ? ++patronsDrinksMap[patron] : 1;
	}

	return Math.max(...Object.values(patronsDrinksMap)) > allowedServings;
};

// Examples
console.log(
	limitedServings(["Joe", "Bart", "Larry", "Joe", "Carl", "Doug", "Joe"], 2)
); // true
// returns True because Joe went over the limit.

// Test Cases
// empty list of patrons
console.log(limitedServings([], 2)); // false

// no allowed drinks
console.log(
	limitedServings(["Joe", "Bart", "Larry", "Joe", "Carl", "Doug", "Joe"], 0)
); // true

// frequency of every patron < allowed servings
console.log(
	limitedServings(["Joe", "Bart", "Larry", "Joe", "Carl", "Doug", "Joe"], 5)
); // false

// frequency of a patron == allowed servings
console.log(
	limitedServings(["Joe", "Bart", "Larry", "Joe", "Bart", "Larry"], 2)
); // false

// frequency of a patron > allowed servings
console.log(
	limitedServings(["Joe", "Bart", "Larry", "Joe", "Bart", "Larry"], 1)
); // true
