/*

❓ PROMPT
Given an array of floats that represents the movement in the share price of a company over time, design an algorithm that determines the maximum profit that could have been made by buying and then selling a single share over the time period. The buy must occur before the sell.

Example(s)
Input: prices = [7,1,5,3,6,4]
Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*Note: buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.*

Input: prices = [7,6,4,3,1]
Output: 0

Explanation: In this case, no transactions are done, and the max profit = 0.

Note
- prices can be an empty array
- If prices contains only 1 element then return 0
- If stock price always go down return 0
- Max profit must always be >= 0
 

🔎 EXPLORE
List your assumptions & discoveries:
- Want to return the maximum price from buying and then selling 1 stock
- Stock must be purchased before it can be sold
- Never buy and then sell it for less money later
- If prices.length < 1 return 0
- If prices are always going down then return 0

Insightful & revealing test cases:

 maxProfitPotential([]) // 0
 maxProfitPotential([17]) // 0
 maxProfitPotential([7,1,5,3,6,4]) // 5
 maxProfitPotential([7,6,4,3,1]) // 0
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Loop through the prices array, track variables and return max price
Time: O(N) where N is prices.length
Space: O(1) to store variables

📆 PLAN
Outline of algorithm #: 1
 
Initialize maxProfit and set to 0
Initialize a minPrice and set to Infinity

Iterate through the prices array
- Calculate the potential profit if you sold the current stock and stock into a variable
- If currentProfit > maxProfit then set maxProfit = currentProfit
- If currentStockPrice < minPrice then set minPrice = currentStockPrice

Return maxProfit

*/

const maxProfitPotential = (prices) => {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};

// All test cases return true
console.log(maxProfitPotential([]) == 0);
console.log(maxProfitPotential([1]) == 0);
console.log(maxProfitPotential([1, 9]) == 8);
console.log(maxProfitPotential([8, 2]) == 0);
console.log(maxProfitPotential([3, 1, 5]) == 4);
console.log(maxProfitPotential([7, 6, 4, 3, 1]) == 0);
console.log(maxProfitPotential([3, 3, 3, 3, 3, 3]) == 0);
console.log(maxProfitPotential([7, 1, 5, 3, 6, 4]) == 5);
console.log(maxProfitPotential([1, 2, 3, 5, 6, 7]) == 6);
console.log(maxProfitPotential([2, 5, 7, 1, 3, 4, 5]) == 5);
console.log(maxProfitPotential([0.55, 1.23, 3.53, 1.75, 5.16]) == 4.61);
