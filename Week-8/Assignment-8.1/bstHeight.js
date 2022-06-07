class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    
    constructor() 
    {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(current) {
            if(value < current.value) {

                if(!current.left) {
                    current.left = newNode;
                }
                current = current.left;

            } else if(value > current.value) {

                if(!current.right) {
                    current.right = newNode;
                }
                current = current.right;
            } else {
                return 'duplicate';
            }
        }

    }

    height() {
        return this.heightOfBst(this.root);
    }

    heightOfBst(current) {
        if(!current) {
            return 0;
        }
        return Math.max(this.heightOfBst(current.left), this.heightOfBst(current.right)) + 1;
    }
}

let bstTree = new BinarySearchTree();
let inputArray = [16, 12, 20, 8, 14, 18, 22];
let value;
for(let i = 0; i < inputArray.length; i++) {
    value = inputArray[i];
    bstTree.insert(value);
}

console.log(bstTree.height());


