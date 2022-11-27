// Prompt
// Given an array of floats that represents the movement in the share price of a company over time, design an algorithm that determines the maximum profit that could have been made by buying and then selling a single share over the time period. The buy must occur before the sell.

// Expected Runtime
// Time: O(N) to iterate through the length N array once
// Space: O(1) to use a constant amount of variables for any array length

// Examples
// Input: prices = [7,1,5,3,6,4]

// Input: prices = [5, 7, 8, 9, 3, 1, 6]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note: buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfitPotential = (prices) => {
	if (prices.length < 2) return 0;

	let maxProfit = 0;
	let currentMin = Infinity;

	for (currentPrice of prices) {
		currentMin = Math.min(currentMin, currentPrice);
		maxProfit = Math.max(maxProfit, currentPrice - currentMin);
	}

	return maxProfit > 0 ? maxProfit : 0;
};

// an empty array
console.log(maxProfitPotential([])); // 0

// 1-element array
console.log(maxProfitPotential([1])); // 0

// 2-element array
console.log(maxProfitPotential([1, 9])); // 8
console.log(maxProfitPotential([8, 2])); // 0

// array of all duplicate prices
console.log(maxProfitPotential([3, 3, 3, 3, 3, 3])); // 0

// array of decreasing prices
console.log(maxProfitPotential([7, 6, 4, 3, 1])); // 0

// array of increasing prices
console.log(maxProfitPotential([1, 2, 3, 5, 6, 7])); // 6

// array with fluctuating prices
console.log(maxProfitPotential([3, 1, 5])); // 4
console.log(maxProfitPotential([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfitPotential([0.55, 1.23, 3.53, 1.75, 5.16])); // 4.61
