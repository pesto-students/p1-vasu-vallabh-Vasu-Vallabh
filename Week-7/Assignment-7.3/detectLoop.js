class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// let newHead = head;
// while(newHead.next!=null) {
//     newHead = newHead.next;
// }

// newHead.next = head.next.next;

let speed1x = head;
let speed2x = head;

const isCyclic =  () => {
    while(speed1x.next != null && speed2x.next!=null && speed2x.next.next != null) {
        speed1x = speed1x.next;
        speed2x = speed2x.next.next;
        if(speed1x == speed2x) {
            return true;
        } 
    }
    return false
}

console.log(isCyclic());

