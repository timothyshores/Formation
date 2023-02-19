# Intro to Stacks and Queues

Stacks are like a Pringles can where you can only grab a potato chip from the top and you can only add or put away potato chips at the top of the can.

Queues are like waiting in line at the cash register at a grocery store, waiting in line to check into a hotel, mail a package at the post office or waiting in line for a ride at a theme or amusement park.

## Stack Operations

peak()

- Removes and returns the top most element from the stack
- Time complexity O(1)

pop()

- removes and returns the top most element in the stack
- Time complexity O(1)

push()

- add an element to the top to the stack
- Time complexity O(1)

## Singly Linked List as a Stack

Instead of adding to linked list being O(N) where we start at the head node and calling .next() on every node until we reach the last node in the singly linked list

We can add to the front of the singly linked list instead

// make sure that head is always pointing to the least recently added element .

```javascript
class stackusingLL{
  Node head;

  push(newValueToBeAdded){
    const newHead = new Node(newValueToBeAdded);
    newHead = Node(a);
    newHead.next = head;
    head = newHead;
  }

  pop() {
    const topMostElementInTheStack = head.val;
    head = head.next;
    return topMostElementInTheStack;
  }

  peek(){
      return head.val;
  }
}
```

Examples using stacks

- Reverse strings, arrays, linked lists, etc.
- Check if a word is a palindrome

## Queues

Examples of queues in computer science include printer queues. If there's multiple computers in the library but only one printer for all users then the person who prints their document first gets **enqueued** or added to the queue. After the document it is **dequeued** or removed from the queue.

Both enqueue and dequeue are O(1) constant time operations.

```javascript
class queuesUsingDLL{
  DLL head;
  DLL tail;

  enqueue(a){
    const newHead = new Node();
    newHead.next = head;
    head.prev = newHead;
    head = newHead;
  }

  dequeue(){
    const valToBeReturned = tail.val;
    tail = tail.prev;
    tail.next = null;
    return valToBeReturned
  }
}
```
