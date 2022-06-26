class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        return this.data.push(value);
    }

    pop() {
        if( this.data.length > 0) {
            return this.data.pop();
        }
        return 'Stack Underflow'
    }

    peek() {
        return this.data[this.data.length-1];
    }

    isEmpty() {
        if(this.data.length === 0) {
            return true;
        }
        return false;
    }

    printStack() {
        let str = '';
        for(let i = 0 ; i < this.data.length; i++) {
            str += '\t'+this.data[i];
        }
        return str
    }

    // printStack() {
    //     var str = "Stack -> [ ";
    //     for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    //     str += "]";
    //     console.log(str);
    //     return str;
    //   }
}

let N = 4; 
//let arr = [6, 8, 0, 1, 3];
//let arr = [1, 3, 2, 4];

let newArr = [];
// for(let i = 0; i<arr.length; i++) {
//     for(let j = i+1; j< arr.length; j++) {
//         if(arr[i] < arr[j]) {
//              newArr.push(arr[j]);
//              break;
//         } else if(j == arr.length-1) {
//             newArr.push(-1);
//             break;
//         }
//     }
// }
/*
    Using stack to solve the problem
    only smaller or equal elements can be pushed to the stack
    
*/

//stack is empty then push the element to the stack


let arr = [6, 8, 0, 1, 3];
let nextGreaterElementArray = [];
let mStack = new Stack();

//stack: 0
for(let i = 0; i < arr.length; i++) {
    if (mStack.isEmpty()) {
        mStack.push(i);
    }
    
    while(!mStack.isEmpty() && arr[mStack.peek()] < arr[i]) {
        nextGreaterElementArray[mStack.peek()] = arr[i];
        mStack.pop();
    }

    mStack.push(i);
}

while(!mStack.isEmpty()) {
    nextGreaterElementArray[mStack.peek()] = -1;
    mStack.pop()
}

console.log(mStack.printStack());
console.log(nextGreaterElementArray);

