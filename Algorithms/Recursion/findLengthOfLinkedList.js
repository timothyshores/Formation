// Find the length of a linked list

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const getLengthOfLL = (head) => {
	if (!head) return 0;
	return 1 + getLengthOfLL(head.next);
};

// All test cases return true
console.log(getLengthOfLL() === 0);
console.log(getLengthOfLL(new Node(1)) === 1);
console.log(getLengthOfLL(new Node(100)) === 1);
console.log(getLengthOfLL(new Node(1, new Node(2))) === 2);
console.log(getLengthOfLL(new Node(2, new Node(1))) === 2);
console.log(getLengthOfLL(new Node(1, new Node(2, new Node(3)))) === 3);
console.log(getLengthOfLL(new Node(3, new Node(2, new Node(1)))) === 3);
console.log(
	getLengthOfLL(new Node(1, new Node(2, new Node(3, new Node(4))))) === 4
);
console.log(
	getLengthOfLL(new Node(4, new Node(3, new Node(2, new Node(1))))) === 4
);
