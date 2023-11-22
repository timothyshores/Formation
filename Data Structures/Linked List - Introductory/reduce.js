/*
function reduce(head, accumulator, initialVal) - returns single value

head = 1 -> 2 -> 3 -> 4
accumulator = lambda a, b: a + b
initialVal = 0

returns 10

*/


const reduceSimpleRecursiveAddition = (head) => {
    return !head ? 0 : head.val + reduce(head.next);
}

const reduceSimpleRecursiveMultiplication = (head) => {
	return !head ? 0 : head.val * reduce(head.next);
};

const reduce = (head, accumulator, initialVal = 0) => {
	let accumulatedValue = initialVal;

	if (!head) return initialVal;

	while (head) {
		accumulatedValue = accumulator(accumulatedValue, head.value);
		head = head.next;
	}

	return accumulatedValue;
}

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(reduce(null, sum));
console.log(reduce(new Node(0), sum));
console.log(reduce(new Node(0), multiply));

console.log(reduce(new Node(1), sum));
// console.log(reduce(new Node(1, new Node(2))));
// console.log(reduce(new Node(1, new Node(2, new Node(3)))));
// console.log(reduce(new Node(1, new Node(2, new Node(3, new Node(4))))));
