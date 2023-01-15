/*

❓ PROMPT
We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

Example(s)
triangle(2) == 3
triangle(3) == 6
triangle(5) == 15

🔎 EXPLORE
State your assumptions & discoveries:
· We're adding on the current row number to the previous cumulative total. See examples below.
· Kind of like fibonacci sequence except 
    · Instead of recalculating the n - 1 and n - 2
    · Calculate the previous total, add the current row number and return the sum 

Create examples & test cases:
console.log(triangle(0) === 0); 
console.log(triangle(1) === 1); 
console.log(triangle(2) === 3); 
console.log(triangle(3) === 6); 
console.log(triangle(4) === 10); 
console.log(triangle(5) === 15); 
console.log(triangle(6) === 21); 
console.log(triangle(7) === 28); 
console.log(triangle(8) === 36); 
console.log(triangle(9) === 45); 
console.log(triangle(10) === 55); 
console.log(triangle(11) === 66); 
console.log(triangle(12) === 78); 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: O()
Space: O()

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */
const triangle = (rows) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
