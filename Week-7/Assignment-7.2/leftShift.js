class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

let head =  new Node(1);
head.next  = new Node(2);
head.next.next  = new Node(3);
head.next.next.next  = new Node(4);
head.next.next.next.next  = new Node(5)

console.log(head);
let k = 3;
k = k%5;

let newHead = head;
for (let i = 0; i < k; i++) {
    newHead = newHead.next;
}

let newHeadEnd = newHead;
while(newHeadEnd.next != null) {
    newHeadEnd = newHeadEnd.next
}

let newTail = head;
let newTailEnd = newTail;
for(let i = 1; i < k; i++) {
    newTailEnd = newTailEnd.next;
}
newTailEnd.next = null;

newHeadEnd.next = newTail;

console.log(newHead);