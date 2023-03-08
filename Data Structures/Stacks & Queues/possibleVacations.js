/*

We want to take a vacation and are looking at tables of flight schedules and comparing them against our list of desired destinations.

The schedule displays the flight tables as a map of city names as keys and a list of city names reachable via a direct flight as the values. For example:

{
    'Phoenix': [], // dead-end
    'Seattle': ['Phoenix', 'Boston'], // can fly to 'Phoenix' and 'Boston'
    'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}

Given a flight table, a home city, and a list (array) of destinations, return a new map indicating the number of flights needed for each destination. If a destination is not reachable, do not include it in the output.

EXAMPLE(S)
possibleVacations(
    {'Phoenix': ['Seattle'], 'Seattle':[]},
    'Phoenix', 
    ['Seattle']
)
returns {'Seattle': 1}

possibleVacations(
    {'Phoenix': [], 'Seattle':[]},
    'Phoenix',
    ['Seattle']
)
returns {}

possibleVacations(
    {'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']},
    'Phoenix',
    ['Seattle', 'Boston']
)
returns {'Seattle': 1, 'Boston': 2}

FUNCTION SIGNATURE
function possibleVacations(flightTable, homeCity, destinationList) {

*/

const possibleVacations = (flightTable, homeCity, destinationList) => {
	// Store the destinations that are passed into the function into a set called destinations
	const destinations = new Set(destinationList);

	// Store the home city in a set called cities visited
	const citiesVisited = new Set();

	// Initialize an empty object called results to return at the end of the function
	const results = {};

	// Create a queue and push in a tuple with the home city paired with 0 to represent the starting point
	const cityAndDistanceTupleList = [[homeCity, 0]];

	while (cityAndDistanceTupleList.length > 0) {
		// Remove the first element from the cityAndDistanceTupleList queue
		const [currentCity, numberOfFlights] = cityAndDistanceTupleList.shift();

		// Add the current city to the cities visited set
		citiesVisited.add(currentCity);

		// Iterate through the array that is the key of the current city in the fightsTable
		for (const destination of flightTable[currentCity]) {
			// If the current city has already been visited
			if (citiesVisited.has(destination)) {
				// Continue to the next destination
				continue;
			}
			// The current city has NOT been visited yet
			else {
				// Add the destination city and number of flights tuple to our cityAndDistanceTupleList queue
				cityAndDistanceTupleList.push([destination, numberOfFlights + 1]);

				// If the current destination is in our destinations set and it is NOT in the results object
				if (destinations.has(destination) && !results[destination]) {
					// Add the current destination as the key and one additional flight to results object
					results[destination] = numberOfFlights + 1;
				}
			}
		}
	}

	// Return the results object after we have visited all cities
	return results;
};

// Test cases data
const testcase1 = possibleVacations(
	{
		Phoenix: ["Seattle"],
		Seattle: ["Boston", "Phoenix"],
		Boston: ["Phoenix"],
	},
	"Phoenix",
	["Seattle", "Boston"]
);

const testcase2 = possibleVacations({ Phoenix: [], Seattle: [] }, "Phoenix", [
	"Seattle",
]);

const testcase3 = possibleVacations(
	{
		Phoenix: ["Seattle", "Boston"],
		Seattle: ["Phoenix", "Boston"],
		Boston: ["Phoenix", "Seattle"],
	},
	"Phoenix",
	["Seattle", "Boston"]
);

// All test cases return true
console.log(testcase1.Seattle === 1);
console.log(testcase1.Boston === 2);
console.log(Object.keys(testcase1).length === 2);

console.log(Object.keys(testcase2).length === 0);
console.log(JSON.stringify(testcase2) === "{}");

console.log(testcase3["Seattle"] === 1);
console.log(testcase3["Boston"] === 1);
console.log(Object.keys(testcase3).length === 2);
