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

const addResult = (results, test, actual, expected) => {
  results.push({
    Test: test,
    Actual: actual,
    Expected: expected,
    Pass: actual === expected,
  });
};

const results = [];
const q = new LLQueue();

// Test Case 1: Enqueue elements and check the size
addResult(results, "Initial size", q.size(), 0);
q.enqueue(1);
addResult(results, "Enqueue 1", q.size(), 1);
q.enqueue(2);
addResult(results, "Enqueue 2", q.size(), 2);
q.enqueue(3);
addResult(results, "Enqueue 3", q.size(), 3);

// Test Case 2: Dequeue elements and check the size
let dequeueResult = q.dequeue();
addResult(results, "Dequeue 1", dequeueResult, 1);
addResult(results, "Size after Dequeue 1", q.size(), 2);
dequeueResult = q.dequeue();
addResult(results, "Dequeue 2", dequeueResult, 2);
addResult(results, "Size after Dequeue 2", q.size(), 1);
dequeueResult = q.dequeue();
addResult(results, "Dequeue 3", dequeueResult, 3);
addResult(results, "Size after Dequeue 3", q.size(), 0);

// Test Case 3: Enqueue and dequeue in an alternating fashion
q.enqueue(4);
addResult(results, "Enqueue 4", q.size(), 1);
dequeueResult = q.dequeue();
addResult(results, "Dequeue 4", dequeueResult, 4);
addResult(results, "Size after Dequeue 4", q.size(), 0);
q.enqueue(5);
q.enqueue(6);
addResult(results, "Enqueue 5, 6", q.size(), 2);
dequeueResult = q.dequeue();
addResult(results, "Dequeue 5", dequeueResult, 5);
addResult(results, "Size after Dequeue 5", q.size(), 1);

// Test Case 4: Dequeue from an empty queue
dequeueResult = q.dequeue();
addResult(results, "Dequeue 6", dequeueResult, 6);
dequeueResult = q.dequeue();
addResult(results, "Dequeue from empty", dequeueResult, undefined);
addResult(results, "Size after empty Dequeue", q.size(), 0);

// Test Case 5: Enqueue elements after completely dequeuing the queue
q.enqueue(7);
addResult(results, "Enqueue 7", q.size(), 1);
q.enqueue(8);
addResult(results, "Enqueue 8", q.size(), 2);
dequeueResult = q.dequeue();
addResult(results, "Dequeue 7", dequeueResult, 7);
addResult(results, "Size after Dequeue 7", q.size(), 1);
dequeueResult = q.dequeue();
addResult(results, "Dequeue 8", dequeueResult, 8);
addResult(results, "Size after Dequeue 8", q.size(), 0);

console.table(results);
