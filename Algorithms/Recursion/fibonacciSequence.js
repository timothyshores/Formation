/* 

Details
The "Fibonacci Sequence" is a series of numbers in which each number is the sum of the two preceding numbers.

For example, a simple sequence would look like 0, 1, 1, 2, 3, 5, 8, 13, 21...

In our case, we want to find the n*th number in the sequence (starting at *0).

Given any integer n, compute the value of the *n*th number in the Fibonacci Sequence.

Examples:
If n = 0, we should return 0
If n = 2, we should return 1
If n = 3, we should return 2
If n = 8, we should return 21

Advice / Tips
Think about how to calculate each number based on the previous two
At what point do you hit your base case?

*/

const fib = (n) => {
	if (n === 0 || n === 1) return n;
	return fib(n - 1) + fib(n - 2);
};

// All test cases return true
console.log(fib(1) === 1);
console.log(fib(2) === 1);
console.log(fib(3) === 2);
console.log(fib(4) === 3);
console.log(fib(5) === 5);
console.log(fib(6) === 8);
console.log(fib(7) === 13);
console.log(fib(8) === 21);
console.log(fib(9) === 34);
console.log(fib(10) === 55);
console.log(fib(11) === 89);
console.log(fib(12) === 144);
