/*

❓ PROMPT
You are given four arrays representing two lists of operands, one list of operators, and a list of results. For any index, i, your task is to check to see if:

operands1[i] operators[i] operands2[i] = results[i]

For input arrays arrays like:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3] 
results = [3, 0]

then the result of this function should be [true, false] since 1 + 2 = 3 and 2 - 3 ≠ 0.

The numbers will be integers, and the signs can be "+", "-", "*", "/". Round to the nearest whole number for division.

Example(s)
Given the following:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3] 
results = [3, 0]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 2 - 3 = 0. This evaluation is False

We should return [True, False] as there are two operands in the input list.

Another Example:
operands1_1 = [1, 5, 2]
operators_1 = ['+', '-', '*']
operands2_1 = [2, 3, 4]
results_1 = [3, 2, 8]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 5 - 3 = 2. This evaluation is True
At index 2 we have 2 * 4 = 8. This evaluation is True

We should return [True, True, True]

🔎 EXPLORE
List your assumptions & discoveries:
- Want to return an array where arr[i] is operands1[i] operators[i] operands2[i] == results[i]
- Assume that the arrays operands1, operators, operands2 and results have the same length

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: For loop using JavaScript's built in eval expression
Time: O(N)
Space: O(N)

📆 PLAN
Outline of algorithm #: 1

initialize a new empty array to store our results

for loop starting at 0 until the length of the array minus 1
    finalResultsArray.push(Math.floor(eval(operands1[i] operators[i] operands2[i]) == results[i])

return finalResultsArray

🛠️ IMPLEMENT
function checkArithmeticExpressions(operands1, operators, operands2, results) // returns an array of booleans
def check_arithmetic_expressions(operands1, operators, operands2, results): -> list[bool]

*/

const checkArithmeticExpressions = (
	operands1,
	operators,
	operands2,
	results
) => {
	const booleanResults = [];

	for (let i = 0; i < results.length; i++) {
		evaluatedExpression = eval(
			`${operands1[i]} ${operators[i]} ${operands2[i]}`
		);
		if (operators[i] == "/")
			evaluatedExpression = Math.round(evaluatedExpression);
		booleanResults.push(evaluatedExpression == results[i]);
	}

	return booleanResults;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/
