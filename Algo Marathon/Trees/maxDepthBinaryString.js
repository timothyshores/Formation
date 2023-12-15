/*

You are given a binary tree that is represented by a string. Nodes have no value. 
A 0 represents null and a (00) represents a node with no children, a leaf node. 
((00)0) would represent a tree where the root has one left node and no right node. 
((00)(00)) represents a tree with one left and one right node.

Given this representation of the tree, return the maximum depth of the tree.

EXAMPLE(S)
(((00)0)0) represents this tree with a max depth of 2
    0
   /
  0
 /
0

((0(0(00)))(00)) represents this tree with a max depth of 3
    0
   /  \
  0    0
   \
    0
      \
       0

FUNCTION SIGNATURE
def maxDepth(tree: str) -> int:
*/
