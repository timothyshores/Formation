// Prompt
// We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

// Expected Runtime
// Time: O(n) where n is the number of rows
// Space: O(n) where n is the number of rows to create a stack frame for each row

// Examples
// console.log(triangle(2) === 3); // true
// console.log(triangle(3) === 6); // true
// console.log(triangle(5) === 15); // true

const triangle = (rows) => {
	if (rows === 0 || rows === 1) return rows;
	return rows + triangle(rows - 1);
};

// Test Cases
console.log(triangle(0) === 0); // true
console.log(triangle(1) === 1); // true
console.log(triangle(2) === 3); // true
console.log(triangle(3) === 6); // true
console.log(triangle(4) === 10); // true
console.log(triangle(5) === 15); // true
console.log(triangle(6) === 21); // true
console.log(triangle(7) === 28); // true
console.log(triangle(8) === 36); // true
console.log(triangle(9) === 45); // true
console.log(triangle(10) === 55); // true
console.log(triangle(11) === 66); // true
console.log(triangle(12) === 78); // true
