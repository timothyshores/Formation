/*
PROMPT

Implement a basic stack class using an array as the underlying storage. Stacks have two critical methods, push() and pop() to add and remove an item from the stack, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the stack. All of these methods should run in O(1) time!

Remember, a stack is a last-in, first-out data structure!

Using an array is the simplest way to implement a stack. If you're working in a language that doesn't automatically resize arrays as needed, you might need to do some extra work if your stack runs out of space!

EXAMPLE(S)
stack = new ArrayStack()
stack.size() == 0
stack.push(2)
stack.push(3)
stack.size() == 2
stack.pop() == 3
stack.size() == 1
stack.pop() ==2

FUNCTION SIGNATURE
class ArrayStack {

    // initialize the stack have a specific capacity or default to 10 if no value is provided
    constructor(capacity = 10) {} 

    // Adds new value to the top of the stack
    // If ArrayStack is full, return an error message and do NOT exceed the capacity
    push(newValue) {} 

    // Removes the top element from the stack and return it
    // If ArrayStack is empty
    pop() {} // 

    // Return the current size of the stack
    size() {} 
}

*/

class ArrayStack {}
