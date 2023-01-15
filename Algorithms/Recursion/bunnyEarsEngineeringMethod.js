/*
❓ PROMPT
We have a number of bunnies, each with two big floppy ears. We want to compute the total number of ears across all the bunnies recursively, without loops or multiplication.

Example(s)
bunnyEars(3) == 6
bunnyEars(5) == 10

🔎 EXPLORE
State your assumptions & discoveries:
· Every bunny has two ears
· Return the total count of bunny ears 
· Every count is 2 ears

Create examples & test cases:

console.log(bunnyEars(0) === 0); 
console.log(bunnyEars(1) === 2); 
console.log(bunnyEars(2) === 4); 
console.log(bunnyEars(3) === 6); 
console.log(bunnyEars(4) === 8); 
console.log(bunnyEars(5) === 10); 
console.log(bunnyEars(10) === 20); 
console.log(bunnyEars(50) === 100); 
console.log(bunnyEars(69) === 138); 
console.log(bunnyEars(101) === 202); 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion
Time: O(n)
Space: O(n)

📆 PLAN
High-level outline of approach #: 1
· If there are 0 bunnies then we return 0 ears
· For every bunny was increment the count by 2 since a bunny has 2 ears
· We can keep track of the count by recursively calling the function with 1 less bunny
· Continue to call the recursive case until we hit the base case of 0 bunnies

🛠️ IMPLEMENT */

const bunnyEars = (bunnies) => {
	if (!bunnies) return 0;

	return 2 + bunnyEars(bunnies - 1);
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(bunnyEars(0) === 0);
console.log(bunnyEars(1) === 2);
console.log(bunnyEars(2) === 4);
console.log(bunnyEars(3) === 6);
console.log(bunnyEars(4) === 8);
console.log(bunnyEars(5) === 10);
console.log(bunnyEars(10) === 20);
console.log(bunnyEars(12) === 24);
console.log(bunnyEars(50) === 100);
console.log(bunnyEars(69) === 138);
console.log(bunnyEars(100) === 200);
console.log(bunnyEars(101) === 202);
