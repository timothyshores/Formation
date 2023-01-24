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
