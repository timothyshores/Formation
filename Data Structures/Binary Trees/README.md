# Binary Trees

Binary Trees are tree data structures that are similar to the Linked List data structure. In a LinkedList each node has two properties. Each node stores a piece of data which is typically a the `.val` or `.value` property and also a pointer to the next Node in the Linked List.

```javascript
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
```

Binary Trees are like Linked Lists but rather than only having a single `.next` pointer Binary Trees have a `.left` and `.right` property.

```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

Like a ListNode, TreeNodes also contain a `.val` or `.value` property to store a piece of data in each node. This could be any type of data but often it's a integer, a character, a string or another primitive data type but it could store an object or an array.

Each parent node has a reference to the child nodes but the child nodes will likely **NOT** have a reference to the parent node.

## Terminology

There's a few words that represent specific nodes or collections of nodes within a binary root.

**root node** - the top parent node in a binary tree
**parent node** - a node that has one or two child nodes
**child node** - a node that comes after a parent node when moving away from the root
**leaf node** - a node that has no children. Visually this would be the bottom nodes
**full binary tree** - a binary tree where every node other than the leaves has either zero or two child nodes


### Perfect Binary Tree

- a binary tree where every level, except possibly the last, has two children, and all nodes are as far left as possible
- In a perfect binary tree the number of nodes in each level doubles. E.g. at the root level there's only the root node, the next level there's a left and right child node or a total of two nodes, then at the next level each node has two child nodes for a total of 4 nodes in that level then 8, 16, 32, 64, etc.
- Perfect binary trees have O(log N) time complexity for search, insert and delete
- Perfect binary trees have a heigh of O(log N)

