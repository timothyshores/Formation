// Find the node 3/4ths length through the linked list.
// Assume that the LL has a length divisable by 4 e.g. 4, 8, 12, 16, 20, 24, ..., etc.
// Must be solved within a single pass in exactly O(1N) time. No double for loop with a counter
// How can this be solved in a single pass without a length variable and additional loop?

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findThirdQuarterNode = (head) => {
	let before = new Node();
	before.next = head;

	let current = before;
	let lead = before;

	while (lead.next !== null) {
		for (let i = 0; i < 4; i++) {
			lead = lead.next;
		}
		for (let i = 0; i < 3; i++) {
			current = current.next;
		}
	}

	return current;
};

// Empty LL
console.log(findThirdQuarterNode(null).value === 0); // true
console.log(findThirdQuarterNode(null).next === null); // true

// Four Node LL
let fourNodeLL = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(findThirdQuarterNode(fourNodeLL).value === 3); // true

// 8 Node LL
let eightNodeLL = new Node(
	1,
	new Node(
		2,
		new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8))))))
	)
);
console.log(findThirdQuarterNode(eightNodeLL).value === 6); // true

// 12 node LL
let twelveNodeLL = new Node(
	1,
	new Node(
		2,
		new Node(
			3,
			new Node(
				4,
				new Node(
					5,
					new Node(
						6,
						new Node(
							7,
							new Node(8, new Node(9, new Node(10, new Node(11, new Node(12)))))
						)
					)
				)
			)
		)
	)
);

console.log(findThirdQuarterNode(twelveNodeLL).value === 9); // true
