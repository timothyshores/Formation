/*

Delete K Nodes After Middle In Linked List

Given a linked list, delete K nodes after the middle.

If N is the length of the list, the middle node is [N / 2] using zero-based indexing.

Return the head of the modified list.
 

EXAMPLE(S)
1 -> 2 -> 3 -> 4, k = 2 should return 1 -> 2

1 -> 2 -> 3 -> 4, k = 1 should return 1 -> 2 -> 4

ceiling(4/2) - 1 = 2 - 1 = 1 node from the head

1, k = 0 should return 1

2 -> 9 -> 4 -> 1 -> 7, k = 3 should return 2 -> 9 -> 4

ceiling(5/2) - 1 = 3 - 1 = 2 move from head

2 -> 9 -> 4 -> 1 -> 7, k = 1 should return 2 -> 9 -> 4 -> 7





5 -> 10 -> 15 -> 20 -> 25, k = 2 returns  5 -> 10 -> 15 -> null

          curr


head = new Node(5, new Node(10, new Node(15, new Node(20, new Node(25)))))
const removetheTwo = removeKAfterMiddle(head, 2)
console.log("removetheTwo expects 5->10->15->null");
// Adding 25 at the end
console.log(toString(removetheTwo));
console.log(toString(removetheTwo) == "5->10->15->null")





FUNCTION SIGNATURE
function removeKAfterMiddle(head, k)

EXPLORE: 
-Find middle 
-slow, fast pointer
- Other approaches: go to the end go back to start and stop halfway, convert to DLL

BRAINSTORM:

Start at the head node
Keep a reference to the head node?

Count number of nodes in LL
Divide by 2
Math.floor the result

From the head node move Math.ceiling(length / 2) - 1 nodes 
The .next of the current node will be the middle node

for (i = 0; i <= k; i++) {
  current.next = current.next.next;
}

Edge cases? What if k is > length / 2?

return head

PLAN: 

Count number of nodes in LL

From the head node move Math.ceiling(length / 2) - 1 nodes 
The .next of the current node will be the middle node


If k is > length / 2?
middle.next = null and then return

Else k <= length / 2 need to find the next node towards end of LL to connect middle to k nodes away in LL
  for (i = 0; i <= k; i++) {
    current.next = current.next.next;
  }

Return head of LL

IMPLEMENT:


*/

const removeKAfterMiddle = (head, k) => {
	if (k === 0) return head;

	// Handle edge case if empty LL or null is passed into the function
	if (!head) return head;

	if (!head.next) return head;

	// Count number of nodes in LL
	let listLen = 0;
	let curr = head;

	// Iterate through LL and increment listLen count variable every node
	while (curr) {
		listLen++;
		curr = curr.next;
	}

	// Reset the current pointer to the head node
	curr = head;

	// From the head node move Math.ceiling(length / 2) - 1 nodes
	// The .next of the current node will be the middle node

	// Might have off by 1 error. Include - 1
	for (let i = 0; i < Math.ceil(listLen / 2) - 1; i++) {
		curr = curr.next;
	}

	// If k is > length / 2 then just point mid to null
	if (k >= Math.floor(listLen / 2)) {
		curr.next = null;
	} else {
		// Move middle's .next pointer K number of nodes
		for (let i = 0; i <= k; i++) {
			if (curr.next.next) curr.next = curr.next.next;
		}
	}

	// Return head of LL
	return head;
};

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

function toString(head) {
	let theString = "";
	let current = head;

	while (current) {
		theString += current.value + "->";
		current = current.next;
	}

	return theString + "null";
}

// 1->2->3->4->null
let head = new Node(1, new Node(2, new Node(3, new Node(4))));
const oneThroughFourRemove2 = removeKAfterMiddle(head, 2);
console.log(toString(oneThroughFourRemove2) == "1->2->null");

// 1->2->3->4->null
head = new Node(1, new Node(2, new Node(3, new Node(4))));
// removeKAfterMiddle(head, 1);
// console.log(toString(head) == "1->2->4->null")

// 1-> null
const oneRemove0 = removeKAfterMiddle(new Node(1), 0);
console.log(toString(oneRemove0) == "1->null");

// 2->9->4->1->7->null
head = new Node(2, new Node(9, new Node(4, new Node(1, new Node(7)))));
const threeReove = removeKAfterMiddle(head, 3);
console.log(toString(threeReove) == "2->9->4->null");

// 2->9->4->1->7->null
head = new Node(2, new Node(9, new Node(4, new Node(1, new Node(7)))));
const removeOneAgain = removeKAfterMiddle(head, 1);
console.log(toString(removeOneAgain) == "2->9->4->7->null");

// 5->10->15->20->25->null
head = new Node(5, new Node(10, new Node(15, new Node(20, new Node(25)))));
const removeZero = removeKAfterMiddle(head, 0);
console.log(toString(removeZero) == "5->10->15->20->25->null");

// 5->10->15->20->25->null
head = new Node(5, new Node(10, new Node(15, new Node(20, new Node(25)))));
const removeOneee = removeKAfterMiddle(head, 1);
console.log(toString(removeOneee) == "5->10->15->25->null");

// 5->10->15->20->25->null
head = new Node(5, new Node(10, new Node(15, new Node(20, new Node(25)))));
const removetheTwo = removeKAfterMiddle(head, 2);
console.log(toString(removetheTwo) == "5->10->15->null");

// 5->10->15->20->25->null
head = new Node(5, new Node(10, new Node(15, new Node(20, new Node(25)))));
const removeThreee = removeKAfterMiddle(head, 3);
console.log(toString(removeThreee) == "5->10->15->null");

// 5->10->15->20->25->null
head = new Node(5, new Node(10, new Node(15, new Node(20, new Node(25)))));
const remove900 = removeKAfterMiddle(head, 900);
console.log(toString(remove900) == "5->10->15->null");
