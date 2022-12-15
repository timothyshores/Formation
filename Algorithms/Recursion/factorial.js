// Prompt
// In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. Compute the result recursively (without loops).

// Expected Runtime
// Time: O(N) to calculate N digits
// Space: O(N) to store N frames on the function call stack

// Examples
// console.log(factorial(3) === 6); // true
// console.log(factorial(5) === 120); // true

const factorial = (n) => {
	if (n === 1) return 1;
	return n * factorial(n - 1);
};

// Test Cases
console.log(factorial(1) === 1); // true
console.log(factorial(2) === 2); // true
console.log(factorial(3) === 6); // true
console.log(factorial(4) === 24); // true
console.log(factorial(5) === 120); // true
console.log(factorial(6) === 720); // true
