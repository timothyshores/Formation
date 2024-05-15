/*

❓ PROMPT
In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. 
Compute the result recursively (without loops).

Example(s)
factorial(3) == 6
factorial(5) == 120

Note
- N will always be a postitive non-negative integer e.g 1, 2, 3, ..., etc.
 
🔎 EXPLORE
List your assumptions & discoveries:
- Factorial is calculate by it's value n * n - 2 * n - 2 * ... 1

Insightful & revealing test cases:

factorial(1) == 1
factorial(2) == 2
factorial(3) == 6
factorial(4) == 24
factorial(5) == 120
factorial(6) == 720

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N)
Space: O(1) stack size will be n but n is a positive non-negative integer constant value
 
📆 PLAN
Outline of algorithm #: 1

Base case: n == 1
    return 1

Recursive case: n > 1
    return n * factorial(n - 1)

🛠️ IMPLEMENT

*/