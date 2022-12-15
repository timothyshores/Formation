// Prompt
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the usual 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

// Expected Runtime
// Time: O(n) where n is the number of bunnies
// Space: O(n) where n is the number of stack frames because one is created for each bunny

// Examples
// console.log(bunnyEarsTwist(2) === 5); // true
// console.log(bunnyEarsTwist(3) === 7); // true
// console.log(bunnyEarsTwist(5) === 12); // true

const bunnyEarsTwist = (bunnies) => {
	if (!bunnies) return 0;
	if (bunnies % 2 === 1) return 2 + bunnyEarsTwist(bunnies - 1);
	if (bunnies % 2 === 0) return 3 + bunnyEarsTwist(bunnies - 1);
};

// Test Cases
console.log(bunnyEarsTwist(0) === 0); // true
console.log(bunnyEarsTwist(1) === 2); // true
console.log(bunnyEarsTwist(2) === 5); // true
console.log(bunnyEarsTwist(3) === 7); // true
console.log(bunnyEarsTwist(4) === 10); // true
console.log(bunnyEarsTwist(5) === 12); // true
console.log(bunnyEarsTwist(12) == 30); // true
console.log(bunnyEarsTwist(10) == 25); // true
