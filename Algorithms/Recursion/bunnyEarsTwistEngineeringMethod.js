/*
❓ PROMPT
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the usual 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

Example(s)
bunnyEarsTwist(2) == 5
bunnyEarsTwist(3) == 7
bunnyEarsTwist(5) == 12

🔎 EXPLORE
State your assumptions & discoveries:
· Same as the previous bunnies ears problem except
    · Even numbered bunnies count as 3 ears
· When the input parameter bunnies is even e.g. bunnies % 2 === 0
    · Add 3 instead of 2 

Create examples & test cases:

console.log(bunnyEarsTwist(0) === 0); // true
console.log(bunnyEarsTwist(1) === 2); // true
console.log(bunnyEarsTwist(2) === 5); // true
console.log(bunnyEarsTwist(3) === 7); // true
console.log(bunnyEarsTwist(4) === 10); // true
console.log(bunnyEarsTwist(5) === 12); // true
console.log(bunnyEarsTwist(12) == 30); // true
console.log(bunnyEarsTwist(10) == 25); // true

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: O()
Space: O()

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */

const bunnyEarsTwist = (bunnies) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
