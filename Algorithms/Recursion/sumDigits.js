// Prompt
// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// Expected Runtime
// Time: O(d) where d is the number of digits
// Space: O(d) where d is the number of digits to create each stack frame

// Examples
// console.log(sumDigits(12) === 3); // true
// console.log(sumDigits(49) === 13); // true
// console.log(sumDigits(126) === 9); // true

const sumDigits = (n) => {
	if (n < 10) return n;
	return (n % 10) + sumDigits(Math.floor(n / 10));
};

// All test cases return true
console.log(sumDigits(0) === 0);
console.log(sumDigits(1) === 1);
console.log(sumDigits(2) === 2);
console.log(sumDigits(3) === 3);
console.log(sumDigits(4) === 4);
console.log(sumDigits(5) === 5);
console.log(sumDigits(10) === 1);
console.log(sumDigits(11) === 2);
console.log(sumDigits(12) === 3);
console.log(sumDigits(21) === 3);
console.log(sumDigits(13) === 4);
console.log(sumDigits(31) === 4);
console.log(sumDigits(14) === 5);
console.log(sumDigits(41) === 5);
console.log(sumDigits(111) === 3);
console.log(sumDigits(123) === 6);
console.log(sumDigits(1234) === 10);
console.log(sumDigits(12345) === 15);
