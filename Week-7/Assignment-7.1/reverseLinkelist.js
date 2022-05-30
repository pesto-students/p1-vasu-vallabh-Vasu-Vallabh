class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

let head = new Node(1);
head.next =  new Node(2);
head.next.next =  new Node(3);
head.next.next.next =  new Node(4);

console.log(head);
// prev = null
// current = head
// next = null

let current = head;
let prev = null;
let next = null;

while(current!=null) {
    next = current.next; // next => [2 => 3 => 4]
    current.next = prev; // current.next [1 => null]
    prev = current;
    current = next;
}
head = prev
console.log(head);


