// function map(head, mapper) - returns new list

const map = (head, mapper) => {
    const originalHead = head;

    const helper = node => {
        if (!node) return;
        node.val = mapper(node.val);
        return helper(node.next);
    }

    helper(head);
    return originalHead;
}

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const double = num => num * 2;

console.log(new Node(1), double);