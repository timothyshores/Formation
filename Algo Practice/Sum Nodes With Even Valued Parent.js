/*

❓ PROMPT
Given a binary tree, return the sum of all nodes with an even-valued parent node.

Example(s)
           6
       7       8
    2    7   1   3
result = 19 (7 + 8 + 1 + 3)

           2
       5       9
result = 14 (5 + 9)

           2
    null     null
result = 0
 

🔎 EXPLORE
List your assumptions & discoveries:
- Use a DFS approach
  - If a node is even then sum it's child nodes
  - Else skip the current node and check it's child nodes
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursive DFS
Time: O(N)
Space: O(H) where H is the height of the binary tree
 

📆 PLAN
Outline of algorithm #: 1

- Initialize a results variable and set to 0
- Inner DFS recursive helper function takes in a node
  - If the current node's value is even
    - Add the left and right node values to the results variable
  - Else the current node's value is odd
    - Skip adding the values of the left and right child nodes
      - Continue recursively calling the function until we reach the leaf nodes
- Call the helper function passing in the root node
- Return the results variable
 
🛠️ IMPLEMENT
function sumNodesWithEvenParent(root) {
def sumNodesWithEvenParent(root: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

class Node {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const sumNodesWithEvenParent = (root) => {
  let result = 0;

  const dfs = (node) => {
    if (!node) return 0;

    // Parent node's value is even sum its left and right child nodes
    if (node.val % 2 === 0) {
      if (node.left) result += node.left.val;
      if (node.right) result += node.right.val;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return result;
};

// All test cases return true
console.log(sumNodesWithEvenParent(null) === 0);

//     6
//  7     8
// 2 7   1 3
let root = new Node(
  6,
  new Node(7, new Node(2), new Node(7)),
  new Node(8, new Node(1), new Node(3))
);
console.log(sumNodesWithEvenParent(root) === 19);

//  2
// 5 9
root = new Node(2, new Node(5), new Node(9));
console.log(sumNodesWithEvenParent(root) === 14);

// 2
root = new Node(2);
console.log(sumNodesWithEvenParent(root) === 0);

// 1
root = new Node(1);
console.log(sumNodesWithEvenParent(root) === 0);

//  1
// 5 9
root = new Node(1, new Node(5), new Node(9));
console.log(sumNodesWithEvenParent(root) === 0);

//  1
// 2 2
root = new Node(1, new Node(2), new Node(2));
console.log(sumNodesWithEvenParent(root) === 0);

//    1
//  2   2
// 9   4 1
root = new Node(
  1,
  new Node(2, new Node(9)),
  new Node(2, new Node(4), new Node(1))
);
console.log(sumNodesWithEvenParent(root) === 14);

//    1
//  1
// 1 1
root = new Node(1, new Node(1, new Node(1), new Node(1)));
console.log(sumNodesWithEvenParent(root) === 0);

//    6
//  8
// 4 2
root = new Node(6, new Node(8, new Node(4), new Node(2)));
console.log(sumNodesWithEvenParent(root) === 14);
