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

