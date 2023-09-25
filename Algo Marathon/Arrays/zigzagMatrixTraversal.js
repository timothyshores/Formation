/*

❓ PROMPT
Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, then the third is back to normal order again, each row the opposite order of the ones before and after.

Example(s)
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
linearizeZigZag(matrix) == [1,2,3,6,5,4]

Additional details:
- Rows within the matrix will always be the same length
- Matrix could be either square or rectangular

🔎 EXPLORE
List your assumptions & discoveries:
Keep the rows in row
Every other row we reverse that row
Flatten the matrix but every other row is reversed. 

Insightful & revealing test cases:

const empty = [[]];
linearizeZigZag(empty) == []

const oneRow = [[1, 2, 3]];
linearizeZigZag(oneRow) == [1, 2, 3]

const oneColumnMultipleRows = [[1], [4], [7]];
linearizeZigZag(oneColumnMultipleRows) == [1, 4, 7]

const squareMatrix1 = [
	[1, 2],
	[3, 4],
];
linearizeZigZag(squareMatrix1) == [1, 2, 4, 3]

const squareMatrix2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
linearizeZigZag(squareMatrix2) == [1, 2, 3, 6, 5, 4, 7, 8, 9]

const rectangularMatrix1 = [
	[1, 2, 3],
	[4, 5, 6],
];
linearizeZigZag(rectangularMatrix1) == [1, 2, 3, 6, 5, 4];

const rectangularMatrix2 = [
	[1, 2],
	[3, 4],
	[5, 6],
];
linearizeZigZag(rectangularMatrix2) == [1, 2, 4, 3, 5, 6];

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterate through the matrix by row, when the row index is odd reverse the row, continue until we reach the end of the matrix
Time: O(m * n) where m is the number of rows and n is the number of columns
Space: O(m * n) to store the final result matrix it has the same space requirements as the input matrix

📆 PLAN
Outline of algorithm #: 1

Create an empty array called zigzagged
Iterate through the matrix starting from the first row to the last row
Either check if the current index is even or odd or set a boolean flag
Every odd indexed row we reverse the current row
Every row we visit we push either the original or the reversed order into zigzagged
After we've visited all rows return zigzagged

🛠️ IMPLEMENT
function linearizeZigZag(matrix) {
def linearizeZigZag(matrix: list[list[int]]) -> list[int]:

*/

const linearizeZigZag = (matrix) => {
	const zigzagged = [];
	let reverseCurrentRow = false;

	for (const row of matrix) {
		zigzagged.push(...(reverseCurrentRow ? row.reverse() : row));
		reverseCurrentRow = !reverseCurrentRow;
	}

	return zigzagged;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// Test Data
const testData = [
	{
		name: "emptyMatrix",
		input: [[]],
		expectedOutput: [],
	},
	{
		name: "oneRow",
		input: [[1, 2, 3]],
		expectedOutput: [1, 2, 3],
	},
	{
		name: "oneColumnMultipleRows",
		input: [[1], [4], [7]],
		expectedOutput: [1, 4, 7],
	},
	{
		name: "squareMatrix1",
		input: [
			[1, 2],
			[3, 4],
		],
		expectedOutput: [1, 2, 4, 3],
	},
	{
		name: "squareMatrix2",
		input: [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		expectedOutput: [1, 2, 3, 6, 5, 4, 7, 8, 9],
	},
	{
		name: "rectangularMatrix1",
		input: [
			[1, 2, 3],
			[4, 5, 6],
		],
		expectedOutput: [1, 2, 3, 6, 5, 4],
	},
	{
		name: "rectangularMatrix2",
		input: [
			[1, 2],
			[3, 4],
			[5, 6],
		],
		expectedOutput: [1, 2, 4, 3, 5, 6],
	},
];

/**
 * Compare two arrays for equality.
 *
 * @param {Array} a - The first array for comparison.
 * @param {Array} b - The second array for comparison.
 * @returns {boolean} Returns true if the arrays are equal, otherwise false.
 */
const arrayEquals = (a, b) => {
	return a.length === b.length && a.every((val, index) => val === b[index]);
};

/**
 * Format an array as a string representation.
 *
 * This function takes an array as input and returns its string representation. If the input is an array,
 * it is converted to a JSON string, otherwise, the input is returned as is.
 *
 * @param {Array|*} array - The array or value to be formatted as a string.
 * @returns {string} The string representation of the input array or value.
 */
const formatArray = (array) => {
	return Array.isArray(array) ? JSON.stringify(array) : array;
};

/**
 * Run a series of test cases on an implementation function.
 *
 * This function takes an implementation function and a set of test cases, executes the
 * implementation with each test case's input, and compares the actual output to the
 * expected output. It returns an array of test results.
 *
 * @param {function} implementation - The function to be tested.
 * @param {Array.<TestCase>} testData - An array of test cases to evaluate the function.
 * @returns {Array.<TestResult>} An array of test results, one for each test case.
 */
const runTests = (implementation) => {
	return testData.map(({ name, input, expectedOutput }) => {
		const actualOutput = implementation(input);
		return {
			"Test Name": name,
			"Test Input": formatArray(input),
			"Actual Output": formatArray(actualOutput),
			"Expected Output": formatArray(expectedOutput),
			"Test Passes": arrayEquals(actualOutput, expectedOutput),
		};
	});
};

console.table(runTests(linearizeZigZag));

/*

┌─────────┬─────────────────────────┬───────────────────────────────┬───────────────────────────────┬───────────────────────────────┬─────────────┐ 
│ (index) │        Test Name        │          Test Input           │         Actual Output         │        Expected Output        │ Test Passes │ 
├─────────┼─────────────────────────┼───────────────────────────────┼───────────────────────────────┼───────────────────────────────┼─────────────┤ 
│    0    │      'emptyMatrix'      │            [ [] ]             │              []               │              []               │    true     │ 
│    1    │        'oneRow'         │          [ [Array] ]          │          [ 1, 2, 3 ]          │          [ 1, 2, 3 ]          │    true     │ 
│    2    │ 'oneColumnMultipleRows' │ [ [Array], [Array], [Array] ] │          [ 1, 4, 7 ]          │          [ 1, 4, 7 ]          │    true     │ 
│    3    │     'squareMatrix1'     │     [ [Array], [Array] ]      │ [ 1, 2, 4, ... 1 more item ]  │ [ 1, 2, 4, ... 1 more item ]  │    true     │ 
│    4    │     'squareMatrix2'     │ [ [Array], [Array], [Array] ] │ [ 1, 2, 3, ... 6 more items ] │ [ 1, 2, 3, ... 6 more items ] │    true     │ 
│    5    │  'rectangularMatrix1'   │     [ [Array], [Array] ]      │ [ 1, 2, 3, ... 3 more items ] │ [ 1, 2, 3, ... 3 more items ] │    true     │ 
│    6    │  'rectangularMatrix2'   │ [ [Array], [Array], [Array] ] │ [ 1, 2, 4, ... 3 more items ] │ [ 1, 2, 4, ... 3 more items ] │    true     │ 
└─────────┴─────────────────────────┴───────────────────────────────┴───────────────────────────────┴───────────────────────────────┴─────────────┘ 

*/
