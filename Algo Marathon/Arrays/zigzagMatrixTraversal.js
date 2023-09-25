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

📆 PLAN
Outline of algorithm #: 1

🛠️ IMPLEMENT
function linearizeZigZag(matrix) {
def linearizeZigZag(matrix: list[list[int]]) -> list[int]:

*/

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// Test Data
const testData = [

];
