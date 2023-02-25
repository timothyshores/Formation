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

class ArrayStack {
	constructor(initialCapacity = 10) {
		this.stack = new Array(initialCapacity).fill(undefined);
		this.index = 0;
	}

	push(val) {
		if (this.index < this.stack.length) {
			this.stack[this.index++] = val;
		} else {
			return `Unable to push to ArrayStack with capacity ${this.stack.length}`;
		}
	}

	pop() {
		if (this.index > 0) {
			return this.stack[--this.index];
		} else {
			return `Can NOT call .pop() on empty ArrayStack`;
		}
	}

	size() {
		return this.index;
	}
}

// All console logs statements return true
stack = new ArrayStack();

console.log(stack.size() === 0);
console.log(stack.pop() === "Can NOT call .pop() on empty ArrayStack");
stack.push(2);
console.log(stack.size() === 1);
stack.push(3);
console.log(stack.size() === 2);
console.log(stack.pop() === 3);
console.log(stack.size() === 1);
console.log(stack.pop() === 2);
console.log(stack.size() === 0);
console.log(stack.pop() === "Can NOT call .pop() on empty ArrayStack");
stack.push(1);
console.log(stack.size() === 1);
stack.push(2);
console.log(stack.size() === 2);
stack.push(3);
console.log(stack.size() === 3);
stack.push(4);
console.log(stack.size() === 4);
stack.push(5);
console.log(stack.size() === 5);
stack.push(6);
console.log(stack.size() === 6);
stack.push(7);
console.log(stack.size() === 7);
stack.push(8);
console.log(stack.size() === 8);
stack.push(9);
console.log(stack.size() === 9);
stack.push(10);
console.log(stack.size() === 10);
console.log(stack.push(11) === `Unable to push to ArrayStack with capacity 10`);
console.log(stack.size() === 10);
