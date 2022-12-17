// Prompt
// We have a number of bunnies, each with two big floppy ears. We want to compute the total number of ears across all the bunnies recursively, without loops or multiplication.

// Expected Runtime
// Time: O(n) where n is the number of bunnies
// Space: O(n) where n is the number of stack frames because one is created for each bunny

// Examples
// console.log(bunnyEars(3) === 6); // true
// console.log(bunnyEars(5) === 10); // true

const bunnyEars = (bunnies) => {
	if (bunnies === 0) return 0;
	return 2 + bunnyEars(bunnies - 1);
};

// zero bunnies
console.log(bunnyEars(0) === 0); // true

// 1 bunny
console.log(bunnyEars(1) === 2); // true

// even number of bunnies
console.log(bunnyEars(2) === 4); // true
console.log(bunnyEars(4) === 8); // true
console.log(bunnyEars(10) === 20); // true
console.log(bunnyEars(50) === 100); // true

// odd number of bunnies
console.log(bunnyEars(3) === 6); // true
console.log(bunnyEars(5) === 10); // true
console.log(bunnyEars(69) === 138); // true
console.log(bunnyEars(101) === 202); // true
