/*

❓ PROMPT
Given a linked list of positive integers, count the elements with odd values from the list using a recursive approach.

Note that 0 is an even number.

Example(s)
head = 1 -> 1 -> 1 -> 1
countOdd(head) == 4

head = 1 -> 2 -> 3 -> 4
countOdd(head) == 2

🔎 EXPLORE
List your assumptions & discoveries:
- Return the count of the number of nodes in a LL that contain odd values

Insightful & revealing test cases:

head = null
countOdd(head) == 0

head = 0
countOdd(head) == 0

head = 0 -> 2
countOdd(head) == 0

head = 0 -> 2 -> 2 -> 6 -> 4 -> 12 -> 8
countOdd(head) == 0

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion and counter
Time: O(N) where N is the number of nodes in the LL
Space: O(N) recursive call stack is the number of nodes in the LL

📆 PLAN
Outline of algorithm #: 1

Base Case
If LL is empty or null then return 0

Recursive Case
Check the value of the head node
- If the value is odd then add 1
Call countOdd(head.next)

After tranversing through all nodes in the LL return the count

*/
