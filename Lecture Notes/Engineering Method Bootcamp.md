# Engineering Method Bootcamp

----

Engineers are hired to find answers rather than already know the answer to every questions.

Steps for the engineering method during interviews

- Clarify inputs and outputs
  
  - Given the question write a function isEven takes in a number and return a boolean true or false
  - A good question might be so the numbers 2, 4, 6, 8, 10, 12, ... would return true and the numbers 1, 3, 5, 7, 9, ... would return false;

- Clarify edge cases for inputs

  - Given the question write a function isEven takes in a number and return a boolean true or false
  - Good questions regarding inputs might be can the input be negative or zero? Will the input number be an integer or will it have decimals?

- Ask questions that will determine what code you write

  - Determine if you should write an algorithm that is O(N) linear time with a hash map or O(N ^ 2) quadratic time rather than handle an input like `if (inputParameter === null) return null`

- Propose problem solving solutions

  - If you get a question that could be solved using a nested for loop in O(N ^ 2) linear time or we could use O(N) space to store N number of elements in a hash map and reduce the time complexity to O(N) linear time

----

## Top 5 failures in interviews
  
  1. Going to far into the weed of an interview problem and then try to figure out a new solution after going really in depth
  2. Combining the problem solving process with coding process
     - Write out the rubber ducky pseudocode first before the actual code in written
     - Figure out the logic first before coding
  3. Pattern match too quickly without understanding the problem first is a common pitfall for more experienced engineers
  4. For junior engineers they won't understand patterns such as two pointer, recursion, dynamic programming, trees, graphs, queues, stacks, etc. So they spend too long on the first step without ever getting to the solution.
  5. Not driving the interview forward. It's the responsibility of the interviewee to move the interview forward. If you're waiting for the interviewer to move forward then you're wasting time.
