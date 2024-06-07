/*

❓ PROMPT
Given a linked list and a target value, return the index of the first occurrence of that value in the linked list. The index should be zero-indexed.

You'll need to write your own node class for this. In an interview it might be provided or it might not.

Example(s)
list1 = 1 -> 2 -> 3 -> 4 -> 5

firstIndexInLL(list1, 9) == -1
firstIndexInLL(list1, 3) == 2
 

🔎 EXPLORE
List your assumptions & discoveries:
- Return first index of target value contained in a node
  - Indicies are 0 indexed
- If the value is NOT contained within the LL return -1

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative
Time: O(N)
Space: O(1)
 
🧠 BRAINSTORM
What approaches could work?
Algorithm 2: Recursion
Time: O(N)
Space: O(1)

📆 PLAN
Outline of algorithm #: 1

Initialize an index variable and set it to 0

While node is not null
  TODO: Guard clause
  Check the value of the current node
    If the current node's value is the target return the index
    Else set the current node to the current node.next

If target has not been found in the LL then return -1

Outline of algorithm #: 2

Create an inner helper funtion with an index parameter

Base Case
- If node is null then return -1

Recursive Case
- If the current node's value is equal to target return index
- Call the helper function on node.next and increment index

Call the helper function starting at index 0

*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const firstIndexIterative = (node, target) => {
  let index = 0;

  while (node) {
    if (node.value === target) return index;
    index += 1;
    node = node.next;
  }

  return -1;
};

const firstIndexRecursive = (node, target) => {
  const helper = (node, index) => {
    // Base Case
    if (!node) return -1;
    // Found target in current node
    if (node.value === target) return index;
    // Recursive case
    return helper(node.next, index + 1);
  };

  return helper(node, 0);
};
