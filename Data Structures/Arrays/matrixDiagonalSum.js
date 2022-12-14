// Prompt
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Expected Runtime
// Time: O(sqrt(n)) - where n is the total number of values in the matrix. Could also be considered O(s) where s is the length of one side of the square matrix.
// Space: O(1) to perform the calculation in a single variable

// Examples
// Input:
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Element mat[1][1] = 5 is counted only once.

// Input:
// [[1,1,1,1],
//  [1,1,1,1],
//  [1,1,1,1],
//  [1,1,1,1]]
// Output: 8

// Input: [[5]]
// Output: 5

const diagonalSum = (matrix) => {
	let sum = 0;

	for (let i = 0; i < matrix.length; i++) {
		if (i === matrix.length - 1 - i) {
			sum += matrix[i][i];
		} else {
			sum += matrix[i][i];
			sum += matrix[i][matrix.length - 1 - i];
		}
	}

	return sum;
};

// empty matrix
console.log(diagonalSum([]) === 0);

// 1-element matrix
console.log(diagonalSum([[5]]) === 5);

// odd-sized matrix
console.log(
	diagonalSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]) === 25
);

// even-sized matrix
console.log(
	diagonalSum([
		[1, 3],
		[1, 1],
	]) === 6
);

console.log(
	diagonalSum([
		[1, 1, 1, 2],
		[1, 2, 1, 1],
		[1, 1, 1, 1],
		[2, 1, 1, 2],
	]) === 12
);
