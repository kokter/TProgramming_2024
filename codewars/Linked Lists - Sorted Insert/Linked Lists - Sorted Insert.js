class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insertSorted(head, data) {
    const newNode = new Node(data);

    if (!head || data < head.data) {
        newNode.next = head;
        return newNode;
    }
    let current = head;
    while (current.next && current.next.data < data) {
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
}
function printList(head) {
    const result = [];
    for (let current = head; current; current = current.next) {
        result.push(current.data);
    }
    console.log(result.join(' -> '));
}

const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
const newHead1 = insertSorted(list1, 4);
printList(newHead1);

const list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(8);
const newHead2 = insertSorted(list2, 5);
printList(newHead2);

const list3 = new Node(3);
list3.next = new Node(5);
list3.next.next = new Node(9);
const newHead3 = insertSorted(list3, 7);
printList(newHead3);