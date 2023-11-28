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
- All values in the left subtree are less than the value contained within the current node
- All values in the right subtree are greater than the value contained within the current node
- Want to check that if a node has a left child that the left child node's value is less than the current node
- Want to check that if a node has a left right that the right child node's value is less than the current node

Insightful & revealing test cases:

  2 <--- root
1   3
isValidBST(root) == True

  1 <--- root
2   3
isValidBST(root) == False because 2 is the root node's left child node and 2 > 1

  3 <--- root
1   2
isValidBST(root) == False because 2 is the root node's right child node and 3 > 2

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: DFS track all values in a path to the root. If there's larger value return false. If all paths meet this condition than return true
Time: O(N) to visit N number of nodes
Space: O(N) where N is the length of the longest path

📆 PLAN
Outline of algorithm #:

🛠️ IMPLEMENT
function isValidBST(root) {
def isValidBST(root: Node) -> bool:

🧪 VERIFY
Run tests. Methodically debug & analyze issues.


*/
