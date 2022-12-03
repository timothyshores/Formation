// Prompt
// Given an array of integers representing piles of rocks (e.g., 3 means 3 rocks), modify the input array to rank the piles from 1 to N, representing the least to the most quantity of rocks.
// That is, the pile with the lowest count of rocks should be ranked 1, the second lowest should be 2, and so on.
// You may use built-in functions provided by your programming language.

// Expected Runtime
// Time: O(N log N) to traverse the length N array and organize it
// Space: O(N) to store up to N elements for processing

// Example 1
// Input: [10, 8, 15, 12, 6, 20, 1]
// Output: [4, 3, 6, 5, 2, 7, 1]

// Example 2
// Input: [3, 4, 1]
// Output: [2, 3, 1]

// Example 3
// Input: [2, 1]
// Output: [2, 1]

const rankPiles = (piles) => {
	// Create copy by values of piles
	const unsorted = [...piles];

	// sort the array using built in sort in log linear O(N log N)
    const sorted = piles.sort((a, b) => a - b);

	// create an object / has map to store key value pairs using O(n) space
	const rankingsMap = {};
    
	// iterate through the array in linear O(N) time 
	for (let i = 0; i < sorted.length; i++) {
        // set the key as the element in piles and value with it's corresponding rank
		rankingsMap[sorted[i]] = i + 1;
	}

    // Store rankings in O(n) space
    const rankings = [];
    
	// after object is created loop through the original piles array in linear O(n) time
    for (const pile of unsorted) { 
        rankings.push(rankingsMap[pile]);
	}

	// return the new array containing just the rankings only
	return rankings;
};
