/*

❓ PROMPT
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the usual 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

Example(s)
bunnyEarsTwist(2) == 5
bunnyEarsTwist(3) == 7
bunnyEarsTwist(5) == 12

🔎 EXPLORE
List your assumptions & discoveries:
- Odd bunnies have 2 ears
- Even bunnies have 3 ears

Insightful & revealing test cases:
bunnyEarsTwist(0) == 0
bunnyEarsTwist(1) == 2
bunnyEarsTwist(2) == 5
bunnyEarsTwist(3) == 7
bunnyEarsTwist(4) == 10
bunnyEarsTwist(5) == 12
bunnyEarsTwist(10) == 25
bunnyEarsTwist(12) == 30

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N)
Space: O(N) recursive stack

📆 PLAN
Outline of algorithm #: 1

Base Case
If bunnies is 0 return 0

Recursive cases
- If number is odd add 2 else number is even add 3
- Recursively call bunnyEarsTwist(bunnies -1)

*/

const bunnyEarsTwist = (bunnies) => {
  if (bunnies === 0) return 0;

  const ears = bunnies % 2 === 0 ? 3 : 2;
  return ears + bunnyEarsTwist(bunnies - 1);
};

// All test cases return true
console.log(bunnyEarsTwist(0) == 0);
console.log(bunnyEarsTwist(1) == 2);
console.log(bunnyEarsTwist(2) === 3);
console.log(bunnyEarsTwist(3) == 7);
console.log(bunnyEarsTwist(4) == 10);
console.log(bunnyEarsTwist(5) == 12);
console.log(bunnyEarsTwist(10) == 25);
console.log(bunnyEarsTwist(12) == 30);
