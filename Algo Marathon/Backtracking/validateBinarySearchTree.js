/*

❓ PROMPT
Determine if a binary tree is a valid binary search tree.

A binary search tree is a binary tree where for each node, all values in the left subtree are smaller than the current node, and all values in the right subtree are greater than the current node.

Example(s)
     10 <--- root
  5      15
3  7   12  17
isValidBST(root) == True

     30 <--- root
 18      50
3  7   33  77
isValidBST(root) == False
Explanation: 7 is smaller than 18, even though it's the right child.

     30 <--- root
 18      50
3  40   33  77
isValidBST(root) == False
Explanation: 40 is larger than 30, even though it's in the left subtree.

  3 <--- root
1   5
isValidBST(root) == True

    3 <--- root
 1     5
   4
isValidBST(root) == False

🔎 EXPLORE
List your assumptions & discoveries:

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: 
Time:
Space: 

📆 PLAN
Outline of algorithm #:

🛠️ IMPLEMENT
function isValidBST(root) {
def isValidBST(root: Node) -> bool:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.


*/
