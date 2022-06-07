// Implement queue using 2 Stacks.
//Create Stack (Last in First Out).
class Stack {
    
    constructor() {
        this.data = [];
    }

    push(value) {
        return this.data.push(value);
    }

    pop() {
        if(!this.data.length) {
            return -1;
        }
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length-1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    printStack() {
        for(let i = 0; i< this.data.length; i++) {
            console.log({i}, this.data[i])
        }
    }

}

// let mStack1 = new Stack();
// let mStack2 = new Stack();

// Now implement queue using the above 2 stacks
class Queue { 
    
    constructor() {
        this.mStack1 = new Stack();
        this.mStack2 = new Stack();

    }

    eneque(value) {
        /* 
            There are 3 steps to push the elements to the stack
            Step -1 check if the stack1 is not empty
                    a. pop out all the elements from the stack1 and push them to stack2
            Step -2 push the element to the stack.
            Step -3 check if stack 2 is not empty
                    a. pop out all the elements from the stack2 and push them to stack1

        */

        while(!this.mStack1.isEmpty()) {
            this.mStack2.push(this.mStack1.pop());
        }

        this.mStack1.push(value);

        while(!this.mStack2.isEmpty()) {
            this.mStack1.push(this.mStack2.pop());
        }
    }

    dequeue() {
        /* 
            There is only 2 step
            1. If the length of the stack is 0
                a. print "Stack underflow"
            2. If length is greater than 0.
                a. pop the elementst from the stack 
                since everything is taken care on push operation.
        */
       return this.mStack1.pop();
    }

    printStack() {
        this.mStack1.printStack();
    }
}


let inputArray = [1, 2, 2, 2, 1, 4];
let outputArray = [];
let queue = new Queue(); 

for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] === 1) {
        queue.eneque(inputArray[i+1]);
        i = i+1;
    } else if(inputArray[i] === 2) {
        let removedElement = queue.dequeue();
        outputArray.push(removedElement);
    }
}

console.log(outputArray);