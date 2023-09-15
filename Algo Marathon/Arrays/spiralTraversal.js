/*

Problem Description: Spiral Order Matrix Traversal

Given a matrix of positive integers, implement a function `spiralOrder(matrix)` to return a clockwise spiral order traversal of the matrix. The matrix will always be well-formed.

Function Signature:
function spiralOrder(matrix)

@param {number[][]} matrix - A two-dimensional array of positive integers.
@returns {number[]} - A clockwise spiral order traversal of the matrix.

Constraints:
- The input matrix `matrix` is a two-dimensional array of positive integers.
- The matrix dimensions are `m x n` where `1 <= m, n <= 100`.
- The elements in the matrix are positive integers, with each element `matrix[i][j]` satisfying `1 <= matrix[i][j] <= 100`.
- The input matrix will be either a square matrix or a rectangular matrix (number of rows ≠ number of columns).

Edge Cases:
- If the input matrix is empty (i.e., `matrix` is an empty array), return an empty array.
- If the input matrix contains a single element (i.e., a matrix with only one positive integer), return an array containing that single element.

Example 1:

Input:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

Output:
const result1 = [1, 2, 3, 6, 9, 8, 7, 4, 5];

Example 2:

Input:
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6]
];

Output:
const result2 = [1, 2, 3, 6, 5, 4];

Example 3:

Input:
const emptyMatrix = [];

Output:
const result3 = [];

Example 4:

Input:
const singleElementMatrix = [[42]];

Output:
const result4 = [42];

Please implement the `spiralOrder` function and ensure it handles the edge cases as specified.

*/

const traverseLeftToRight = (matrix, top, bottom, left, right, result) => {
	for (let i = left; i <= right; i++) {
		result.push(matrix[top][i]);
	}
};

const traverseTopToBottom = (matrix, top, bottom, left, right, result) => {
	for (let i = top; i <= bottom; i++) {
		result.push(matrix[i][right]);
	}
};

const traverseRightToLeft = (matrix, top, bottom, left, right, result) => {
	for (let i = right; i >= left; i--) {
		result.push(matrix[bottom][i]);
	}
};

const traverseBottomToTop = (matrix, top, bottom, left, right, result) => {
	for (let i = bottom; i >= top; i--) {
		result.push(matrix[i][left]);
	}
};

const spiralOrder = (matrix) => {
	if (!matrix.length) return [];

	const result = [];
	const numRows = matrix.length;
	const numColumns = matrix[0].length;
	let topBoundary = 0,
		bottomBoundary = numRows - 1,
		leftBoundary = 0,
		rightBoundary = numColumns - 1;

	while (topBoundary <= bottomBoundary && leftBoundary <= rightBoundary) {
		traverseLeftToRight(
			matrix,
			topBoundary,
			bottomBoundary,
			leftBoundary,
			rightBoundary,
			result
		);
		topBoundary++;
		traverseTopToBottom(
			matrix,
			topBoundary,
			bottomBoundary,
			leftBoundary,
			rightBoundary,
			result
		);
		rightBoundary--;
		traverseRightToLeft(
			matrix,
			topBoundary,
			bottomBoundary,
			leftBoundary,
			rightBoundary,
			result
		);
		bottomBoundary--;
		traverseBottomToTop(
			matrix,
			topBoundary,
			bottomBoundary,
			leftBoundary,
			rightBoundary,
			result
		);
		leftBoundary++;
	}

	return result;
};
