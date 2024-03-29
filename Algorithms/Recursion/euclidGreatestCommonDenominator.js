/*

❓ PROMPT
Euclid's algorithm for finding the greatest common divisor (GCD) of two numbers *a* and *b* is:

euclidGCD(a, 0) := a
euclidGCD(a, b) := gcd(b, a mod b) 

Write a function that implements Euclid's algorithm and finds the GCD of two numbers. 

Check out this video https://www.youtube.com/watch?v=Jwf6ncRmhPg
for more information on this very old algorithm.

Wikipedia https://en.wikipedia.org/wiki/Euclidean_algorithm also has a formal write-up.

Example(s)
euclidGCD(9, 27) == 9
euclidGCD(27, 9) == 9
euclidGCD(3, 1) == 1

🔎 EXPLORE
State your assumptions & discoveries:
· Want to find the greatest common denominator given to integers

Create examples & test cases:

euclidGCD(1, 1) === 1
euclidGCD(50, 1) === 1
euclidGCD(50, 2) === 2
euclidGCD(50, 4) === 2
euclidGCD(31, 19) === 1
euclidGCD(10, 10) === 10
euclidGCD(23, 23) === 23
euclidGCD(25, 50) === 25
euclidGCD(50, 25) === 25
euclidGCD(100, 50) === 50

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Use recursion 
Time: O(log n) 
Space: O(log n)

📆 PLAN
High-level outline of approach #: 
· Base case when one of the two numbers is 0 return a
· Recursive case is we call the function again with b and a % b

🛠️ IMPLEMENT */
const euclidGCD = (a, b) => {
	if (b === 0) return a;
	return euclidGCD(b, a % b);
};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

// All test cases return true
console.log(euclidGCD(1, 1) === 1);
console.log(euclidGCD(3, 1) === 1);
console.log(euclidGCD(3, 9) === 3);
console.log(euclidGCD(6, 9) === 3);
console.log(euclidGCD(3, 27) == 3);
console.log(euclidGCD(27, 3) == 3);
console.log(euclidGCD(9, 9) === 9);
console.log(euclidGCD(9, 27) == 9);
console.log(euclidGCD(27, 9) == 9);
console.log(euclidGCD(50, 1) === 1);
console.log(euclidGCD(50, 2) === 2);
console.log(euclidGCD(50, 4) === 2);
console.log(euclidGCD(27, 27) == 27);
console.log(euclidGCD(31, 19) === 1);
console.log(euclidGCD(10, 10) === 10);
console.log(euclidGCD(23, 23) === 23);
console.log(euclidGCD(25, 50) === 25);
console.log(euclidGCD(50, 25) === 25);
console.log(euclidGCD(100, 50) === 50);
