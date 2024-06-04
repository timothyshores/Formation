/*
'''
❓ PROMPT
Implement a basic queue class using a linked list as the underlying storage. Queues have two critical methods, enqueue() and dequeue() to add and remove an item from the queue, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the queue. All of these methods should run in O(1) time!

Remember, a queue is a first-in, first-out (or last-in, last-out) data structure!

A doubly linked list is one of the simplest ways to implement a queue. You'll need both a head and tail pointer to keep track of where to add and where to remove data. This can be done with a singly linked list or doubly linked list. Which do you prefer?

Example(s)
q = new LLQueue();
console.log(q.size()) // 0
q.enqueue(2); // 2
q.enqueue(3); // 3 -> 2
console.log(q.size()) // 2
console.log(q.dequeue()); // 2
console.log(q.size()) // 1
console.log(q.dequeue()); // 3
 

🔎 EXPLORE
List your assumptions & discoveries:
- Create a linked list class
  - Linked lists node contain 2 properties
    - Store data or a value
    - A pointer to the next node

- Implement a queue class with the following methods
  - enqueue() 
    - Add new node to either the head or tail of the LL
  - dequeue() 
    - Remove node from either the head or tail of the LL
    - If LL is empty then retirn undefined
  - size()
    - Returns the number of elements in the LL
- All operations need to run in O(1) time
  - E.g. need doubly linked list or a pointer at the head, node before tail and tail

Insightful & revealing test cases:

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 

Implement using a doubly linked list (DLL) 

🛠️ IMPLEMENT
class LLNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LLQueue {
  constructor() {}

  enqueue(newValue) {}

  dequeue() {}

  size() {}
}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count += 1;
  }

  dequeue() {
    if (this.count === 0) return undefined;

    const oldHead = this.head;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.count -= 1;
    return oldHead.value;
  }

  size() {
    return this.count;
  }
}
