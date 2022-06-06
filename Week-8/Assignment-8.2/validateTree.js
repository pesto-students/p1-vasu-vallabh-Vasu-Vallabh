class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    
    constructor() {
        this.root = null;
    }

    createTree() {
        // 16, 12, 20, 8, 14, 18, 22

/*

this.root = {
    value: 16,
    left: {
        value: 12,
        left: {
            value: 8,
            left: null,
            right: null,
        },
        right: {
            value: 14,
            left: null,
            right: null,
        }
    },
    right: {
        value: 20,
        left: {
            value: 18,
            left: null,
            right: null,
        },
        right: {
            value: 22,
            left: null,
            right: null,
        }
    }
}
*/ 

/*
*/ 
this.root = {
    value: 5,
    left: {
        value: 1,
        left: null,
        right: null
    },
    right: {
        value: 4,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 6,
            left: null,
            right: null
        }
    }
}
        
    }

    isValidTree() {
        let value = Number.NEGATIVE_INFINITY;
        let isValid = true;
        return this.traverseInOrder(this.root, value, isValid)
    }

traverseInOrder(current, sortedArray) {

        if(current.left) {
            this.traverseInOrder(current.left, sortedArray)
        }

//        sortedArray.push(current.value);
          if(this.value < current.value) {
              this.value = current.value;
          } else {
              this.isValid = false;
          }

        if(current.right) {
            this.traverseInOrder(current.right, sortedArray)
        }

        return this.isValid;
    }

}

let isBinarySerchTree = new BinaryTree();
isBinarySerchTree.createTree();
console.log(isBinarySerchTree.isValidTree());