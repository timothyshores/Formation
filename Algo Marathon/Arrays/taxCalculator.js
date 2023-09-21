/*

You are given a list of tax brackets, each defined by a range of taxable income and a marginal tax rate.Your task is to write a function that takes in a taxable income and returns the amount of tax payable on that income based on the given tax brackets.

Write a function that takes the following parameters:

taxable_income: a float representing the amount of taxable income
brackets: a list of tuples, where each tuple contains three floats: the lower limit of the bracket (exclusive), the upper limit (inclusive), and the marginal tax rate for that bracket. The first tuple should represent the lowest bracket with a lower limit of 0 and an upper one greater than 0.

The function should return the total amount of tax payable on the taxable_income, calculated as the sum of the tax payable for each bracket.

[Optional]: How would you account for deductions? What about tax credits?

Further reading: https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets

EXAMPLES
If the taxable income is $80,000 and the tax brackets are:
[(0, 10000, 0.10), (10000, 30000, 0.15), (30000, 60000, 0.25), (60000, float('inf'), 0.35)]

The function should return 18500 because of the following calculation:

The first $10,000 is taxed at 10%, which is $1,000
The next $20,000 is taxed at 15%, which is $3,000
The next $30,000 is taxed at 25%, which is $7,500
The remaining $20,000 is taxed at 35%, which is $7,000
The total tax payable is $1,000 + $3,000 + $7,500 + $7,000 = $18,500

function calculate_tax(taxable_income, brackets) {
def calculate_tax(taxable_income: float, brackets: List[Tuple[float, float, float]]) -> float:


EXPLORE

You are given a list of tax brackets, each defined by a range of taxable income and a marginal tax rate. Your task is to write a function that takes in taxable income and returns the amount of tax payable on that income based on the given tax brackets.

BRAINSTORM
Approach 1: Iterate through each tax bracket, calculating taxes owed within each bracket and subtract the taxable income as it's taxed

Time Complexity: O(N) iterate through all N tax brackets
Space Complexity: O(1) keep track of a set number of variables that remains static regardless of the inputs

PLAN

1. Initialize a variable `taxesOwed` to keep track of the total tax payable.
2. Calculate the remaining taxable income by subtracting tax deductions from the taxable income.
3. Iterate through each tax bracket in the `taxBrackets` list.
4. For each tax bracket:
    - Check if the remaining taxable income is greater than 0. If not, exit the loop since all income has been taxed.
    - Calculate the income to be taxed within the current bracket by taking the minimum of the remaining taxable income and the difference between the upper and lower bracket limits.
    - If there is income to be taxed in this bracket (i.e., `incomeToBeTaxed` is greater than 0), calculate the tax amount for this bracket by multiplying `incomeToBeTaxed` by the marginal tax rate of the bracket.
    - Add the tax amount for this bracket to the `taxesOwed` variable.
    - Update the remaining taxable income by subtracting `incomeToBeTaxed`.
5. After iterating through all tax brackets, return the total tax payable (`taxesOwed`) minus any tax credits.

*/
