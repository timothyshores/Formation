/*

❓ PROMPT
Given two arrays, `rowSums` and `columnSums`, and a rectangular matrix. 
Check to see if the two arrays are correct with respect to the matrix. 
Return true if the ith row sums to the value in `rowSums[i]` for every i and if the jth column sums to `columnSums[j]` for every j. 
Return false if any of these are incorrect.

Example(s)
matrix = [
  [1, 2],
  [3, 4]
]

rowSums = [3, 7]
columnSums = [4, 6]

will return true.

matrix = [
  [1, 2],
  [3, 4]
]
rowSums = [3, 7]
columnSums = [4, 7]

will return false.
 

🔎 EXPLORE
List your assumptions & discoveries:

- Row sums is an array of integers
    - First element should represent the sum of the elements in the first row
    - Second element should represent the sum of the elements in the second row
- Column sums is an array of integers
    - First element should represent the sum of the elements in the first column
    - Second element should represent the sum of the elements in the second column

- If numbers of rows in the matrix !== rowSums.length then return false
- If numbers of columns in the matrix !== rowSums.length then return false

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative nested for loop through all rows and columns. Compare sums to corresponding index in rowSums and then columnSums
Time: O(M * N) where M is the number of rows and N is the number of columns
Space: O(1) Return false if any row or column sum does NOT match the corresponding element in rowSum or columnSum
 
📆 PLAN
Outline of algorithm #: 1
 
- If number of rows !== rowSums.length return false
- If number of columns !== columnSums.length return false

Iterate through each row and calculuate the sum of all elements in the given row
- Compare the calculuate row sum to the corresponding element in rowSums input
    - If values are NOT equal then return false

Iterate through each row and calculuate the sum of all elements in the given column
- Compare the calculuate row column to the corresponding element in rowColumns input
    - If values are NOT equal then return false

After all row and column sums have been checked then return true

*/

const checkSums = (matrix, rowSums, columnSums) => {
  const rows = matrix.length;
  const columns = matrix[0].length;

  if (rows !== rowSums.length) return false;
  if (columns !== columnSums.length) return false;

  for (let i = 0; i < rows; i++) {
    const rowSum = matrix[i].reduce((a, b) => a + b, 0);
    if (rowSum !== rowSums[i]) return false;
  }

  for (let i = 0; i < columns; i++) {
    const columnSum = matrix.reduce((acc, row) => acc + row[i], 0);
    if (columnSum !== columnSums[i]) return false;
  }

  return true;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// All test cases return true

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 7],
    [4, 6]
  ) === true
);

console.log(
  checkSums(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [6, 15],
    [5, 7, 9]
  ) === true
);

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 7],
    [4, 7]
  ) === false
);

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 8],
    [4, 6]
  ) === false
);

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 7],
    [4]
  ) === false
);

console.log(
  checkSums(
    [
      [1, 2],
      [3, 4],
    ],
    [3, 5, 7],
    [4, 6]
  ) === false
);
