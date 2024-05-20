/*

Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5

countElements(root) -> 5

🔎 EXPLORE
What are some other insightful & revealing test cases?

- null tree
    - 0 since there's no valid elements in the tree
- Root node only, no child nodes
    - 1 since it's the root node only with no child nodes
- Root node with left and right child
    - 3 root node, left and right child nodes

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursive stack approach
Time: O(N) to visit N number of nodes
Space: O(1) count number of elements in the tree
Max stack height: O(H) where H is the height of the tree
 

📆 PLAN
Outline of algorithm #: 1
 
If there's no root node return 0
Else there a root node
    - Return 1 + number of elements in left subtree + number of elements in right sub tree

*/

