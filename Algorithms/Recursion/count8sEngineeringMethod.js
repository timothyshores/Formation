/*

❓ PROMPT
Given a non-negative int n, compute recursively (no loops) the number of occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4 (because 2+1+0+1).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
count8(8) == 1
count8(818) == 2
count8(8818) == 4  (because 2+1+0+1)

🔎 EXPLORE
State your assumptions & discoveries:
· Input will be zero or a positive integer. Input will NOT be a negative integer nor a floating point number.
· If we find an 8 then we count it as 1 point BUT if there's another 8 to it's left then we count the right most 8 as 2 

Create examples & test cases:

console.log(count8(0) === 0);
console.log(count8(1) === 0);
console.log(count8(8) === 1);
console.log(count8(11) === 0);
console.log(count8(78) === 1);
console.log(count8(88) === 3);
console.log(count8(111) === 0);
console.log(count8(123) === 0);
console.log(count8(818) === 2);
console.log(count8(888) === 5);
console.log(count8(188) === 3);
console.log(count8(8234) === 1);
console.log(count8(2348) === 1);
console.log(count8(1080) === 1);
console.log(count8(9898) === 2);
console.log(count8(8088) === 4);
console.log(count8(8818) === 4);
console.log(count8(8888) === 7);
console.log(count8(81238) === 2);
console.log(count8(23884) === 3);
console.log(count8(88188) === 6);
console.log(count8(88788) === 6);
console.log(count8(88888) === 9);
console.log(count8(881881) === 6);
console.log(count8(1818188) === 5);
console.log(count8(8818181) === 5);
console.log(count8(1881881) === 6);
console.log(count8(188188188) === 9);
console.log(count8(881881881) === 9);

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
· Use recursion check the right most 8
· If the right most digit is 8 add 1
· If the right most digit is 8 to to it's left the second right most digit is also an 8 add 2
Time: O(N)
Space: O(N)

📆 PLAN
High-level outline of approach #: 1
· Base case
    · When input n is a single digit number e.g. 0 to 9
        · If n is 8 return 1 
        · If n is any other single digit number besides 8 return 0
· Recursive case 
    · When right most digit is an 8
        · Check the next digit to it's left e.g. the second right most digit
            · If they're both 8 then we add 2 and pass in the remaining digits
            · If only the right most digit is an 8 and it's preceded by not an 8
                · E.g. 08, 18, 28, 38, 48, 58, 68 ,78, 98
    · When right most digit is NOT an 8 recursively call the function with the remaining digits

🛠️ IMPLEMENT */

const count8 = (n) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
