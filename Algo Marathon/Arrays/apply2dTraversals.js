/*

❓ PROMPT
In this task, we're going to apply basic 2-dimensional matrix traversals to solve some simple problems. While working on these, look out for other patterns you may have seen previously. Each of these takes the row- and column-major traversals and composites them with simpler ideas you have almost certainly encountered in one-dimensional problems.

This task is two similar problems in one:
- First, write a function that returns the average of the smallest values in each _column_.
- Write a new version of this function that returns the average of the smallest value in each _row_.

Remember that since we represent a matrix as nested arrays (an array of arrays), many problems on a matrix can be broken down into two array patterns. This makes them easier to reason about and code. 

Example(s)
matrix = [
    [32, 23, 3],
    [23,  7, 5]
]
averageColumnMinimum(matrix) == 11 (because average(23, 7, 3) = 11)
averageRowMinimum(matrix) == 4 (because average(5, 3) = 4)

🔎 EXPLORE
List your assumptions & discoveries:

averageColumnMinimum
- Column major traversal, find the minimum in each column, sum all minimums, divide by number of columns

averageRowMinimum
- Row major traversal, find the minimum in each row, sum all minimums, divide by number of rows

Edge cases - Input matrix could be [[]]. If input matrix is [[]] return 0.

Insightful & revealing test cases:


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Use for loop to iterate
Time: O(N) - must iterate through all N elements in the matrix. Could also be m * n where m and n are number of elements in each row and column.
Space: O(1) - Need to track the sum of the minimum elements in each row or column and the total number of rows or columns to calculate the ACM or ARM. 

📆 PLAN
Outline of algorithm #: 1

Handle the edge case where input matrix is [[]]
Create a variable called sum and initialize to 0
Initialize a for loop
- Row major traversal 
    - Iterate over each row 
    - Get the minimum integer in each row
    - Sum all minimums for each row together
    - Divide by the total number of rows in matrix 
        - Total number of rows is matrix.length
    - Return the average row minimum
- Column major traversal
    - Iterate over each column
        - Iterate over all rows for that given column
        - Get the minimum integer value for that column
    - Sum all column minimum values together
    - Divide the sum by the total number of columns in the matrix
        - Total number of columns is matrix[0].length
    - Return the average column minimum

🛠️ IMPLEMENT 

*/

const averageColumnMinimum = (matrix) => {
	if (matrix[0].length === 0) return 0;

	const numOfCols = matrix[0].length;
	const numOfRows = matrix.length;

	let sum = 0;

	// Traverse input matrix by column
	for (let currentCol = 0; currentCol < numOfCols; currentCol++) {
		let columnMinimum = Infinity;

		// Traverse input matrix by rows
		for (let currentRow = 0; currentRow < numOfRows; currentRow++) {
			columnMinimum = Math.min(matrix[currentRow][currentCol], columnMinimum);
		}

		sum += columnMinimum;
	}

	return sum / numOfCols;
};

const averageRowMinimum = (matrix) => {
	if (matrix[0].length === 0) return 0;
	let sum = 0;

	for (let row of matrix) {
		let rowMinimum = Infinity;

		for (let element of row) {
			rowMinimum = Math.min(element, rowMinimum);
		}

		sum += rowMinimum;
	}

	const numberOfRows = matrix.length;

	return sum / numberOfRows;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

matrix = [
	[32, 23, 3],
	[23, 7, 5],
];

console.log(averageRowMinimum([[]])); // 0
console.log(averageColumnMinimum([[]])); // 0
console.log(averageRowMinimum(matrix)); // 4 because 3 is min of top row, 5 is min of bottom row 3 + 5 = 8 / 2 rows == 4
console.log(averageColumnMinimum(matrix)); // 11 (because 23 is left column min, 7 is middle and 3 is right column min and 23 + 7 + 3 = 33 / 3 rows == 1
