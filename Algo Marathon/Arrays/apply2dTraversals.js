/*

❓ PROMPT
In this task, we're going to apply basic 2-dimensional matrix traversals to solve some simple problems. While working on these, look out for other patterns you may have seen previously. Each of these takes the row- and column-major traversals and composites them with simpler ideas you have almost certainly encountered in one-dimensional problems.

This task is two similar problems in one:
- First, write a function that returns the average of the smallest values in each _column_.
- Write a new version of this function that returns the average of the smallest value in each _row_.

Remember that since we represent a matrix as nested arrays (an array of arrays), many problems on a matrix can be broken down into two array patterns. This makes them easier to reason about and code. 

Example(s)
matrix = [
    [32, 23, 3],
    [23,  7, 5]
]
averageColumnMinimum(matrix) == 11 (because average(23, 7, 3) = 11)
averageRowMinimum(matrix) == 4 (because average(5, 3) = 4)

🔎 EXPLORE
List your assumptions & discoveries:

averageColumnMinimum
- Column major traversal, find the minimum in each column, sum all minimums, divide by number of columns

averageRowMinimum
- Row major traversal, find the minimum in each row, sum all minimums, divide by number of rows

Edge cases - Input matrix could be [[]]. If input matrix is [[]] return 0.

Insightful & revealing test cases:


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Use for loop to iterate
Time: O(N) - must iterate through all N elements in the matrix. Could also be m * n where m and n are number of elements in each row and column.
Space: O(1) - Need to track the sum of the minimum elements in each row or column and the total number of rows or columns to calculate the ACM or ARM. 

📆 PLAN
Outline of algorithm #:

🛠️ IMPLEMENT 

*/

const averageColumnMinimum = (matrix) => {

};

const averageRowMinimum = (matrix) => {

};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

