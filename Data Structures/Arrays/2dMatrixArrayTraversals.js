/*

❓ PROMPT
This exercise is great for building a solid understanding of working with complex data structures. 

Write functions that take a multidimensional array as input and then output a single dimensional array. Start with the elements in increasing _row major_ order, meaning the first row from beginning to end, then the second row, etc. Then move on to _column major_, which is the first column from beginning to end and then the second, etc.

You can use this template to get started:

function template(matrix) {
    const result = [];

  // Your code here.

    return result;
}

As a final challenge, do additional versions where each row is output backward but the rows are in order and similarly for columns. There are actually 4 different variations for both row and column major, so 8 total. Do you see why?

*Python Programmers*: Be sure to do at least one of these variations using both manual counting loops (incrementing an index variable) and also using the range() construct. The range() function is great when you already understand this thoroughly but writing some manual loops will help you build that understanding.

Example(s)
let matrix = [
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15]
];

linearizeRowMajor(matrix) == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
linearizeColumnMajor(matrix) == [1,6,11,2,7,12,3,8,13,4,9,14,5,10,15]

🔎 EXPLORE
List your assumptions & discoveries:
------------------------------------
For this problem the number of elements of length of each subarray will be the same
The matrix could be either a square or a rectangle

Insightful & revealing test cases:
----------------------------------
const emptyMatrix = []
const oneRowMatrix = [[1, 2, 3]]
const multipleColumnsWithOneRow = [[1], [2], [3]]
const squareMatrix = [[1, 2], [3, 4]]
const rectangularMatrix1 = [[1, 2, 3], [4, 5, 6]];
const rectangularMatrix2 = [[1, 2], [3, 4], [5, 6]];

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: 
Nested for loops. 

Time: O(N)
Space: O(1)

📆 PLAN
Outline of algorithm #: 1
- Row traversal: outer for loop represents the subarray and inner for loop is the index of that subarray
- Column traversal: out for loop represents the index of each sub array and inner for loop is the subarray

🛠️ IMPLEMENT
function linearizeRowMajor(matrix) {
function linearizeColumnMajor(matrix) {

*/

const linearizeRowMajor = (matrix) => {
	const result = [];

	for (let i = 0; i < matrix.length; i++) {
		const subarray = matrix[i];
		for (let j = 0; j < subarray.length; j++) {
			result.push(subarray[j]);
		}
	}

	return result;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// Test Data
const emptyMatrix = [];
const oneRowMatrix = [[1, 2, 3]];
const multipleColumnsWithOneRow = [
    [1],
    [2],
    [3],
];
const squareMatrix = [
	[1, 2],
	[3, 4],
];
const rectangularMatrix1 = [
	[1, 2, 3],
	[4, 5, 6],
];
const rectangularMatrix2 = [
	[1, 2],
	[3, 4],
	[5, 6],
];

// Compare to arrays using JSON.stringify
const areArraysEqual = (arr1, arr2) =>
	JSON.stringify(arr1) === JSON.stringify(arr2);

// Test a linearization function with provided input and expected output
const testLinearizeFunction = (linearizeFn, inputData, expectedOutput) =>
	areArraysEqual(linearizeFn(inputData), expectedOutput);

// Test linearizeRowMajor function with provided input and expected output
const testLinearizeRowMajor = (inputData, expectedOutput) =>
	testLinearizeFunction(linearizeRowMajor, inputData, expectedOutput);

// All linearizeRowMajor Test Cases return true
const linearizeRowMajorTests = () => {
	console.log(testLinearizeRowMajor(emptyMatrix, []));
	console.log(testLinearizeRowMajor(oneRowMatrix, [1, 2, 3]));
	console.log(testLinearizeRowMajor(multipleColumnsWithOneRow, [1, 2, 3]));
	console.log(testLinearizeRowMajor(squareMatrix, [1, 2, 3, 4]));
	console.log(testLinearizeRowMajor(rectangularMatrix1, [1, 2, 3, 4, 5, 6]));
	console.log(testLinearizeRowMajor(rectangularMatrix2, [1, 2, 3, 4, 5, 6]));
};

linearizeRowMajorTests();
