// Prompt Given a linked list and an integer, return how many times the integer exists in the list.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const linkedListFrequencyCounter = (list, int) => {
	if (!list) return 0;

	if (list.value == int) return 1 + linkedListFrequencyCounter(list.next, int);

	return linkedListFrequencyCounter(list.next, int);
};

// Test data
const LL7 = new Node(1);
const LL6 = new Node(5, LL7);
const LL5 = new Node(5, LL6);
const LL4 = new Node(4, LL5);
const LL3 = new Node(3, LL4);
const LL2 = new Node(2, LL3);
const LL1 = new Node(1, LL2);

// ALl test cases return true
console.log(linkedListFrequencyCounter(LL1, 0) === 0);
console.log(linkedListFrequencyCounter(LL1, 6) === 0);
console.log(linkedListFrequencyCounter(LL4, 3) === 0);
console.log(linkedListFrequencyCounter(LL5, 4) === 0);
console.log(linkedListFrequencyCounter(LL4, 4) === 1);
console.log(linkedListFrequencyCounter(LL6, 1) === 1);
console.log(linkedListFrequencyCounter(LL1, 1) === 2);
console.log(linkedListFrequencyCounter(LL5, 5) === 2);
