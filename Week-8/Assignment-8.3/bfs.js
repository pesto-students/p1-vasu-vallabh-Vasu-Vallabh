class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BreadFirstSearch {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
          }
          current = current.right;
        } else {
          return "duplicate";
        }
      }
    }
  }

  levelOrder() {
    if (!this.root) return [];

    let levelOrder = []
    let queue = [this.root];
    const getLevelOrder = () => {

        let counter = queue.length;
        let currentLevel = []

        while(counter) {
            let current = queue.shift();
            currentLevel.push(current.value);

            if(current.left) {
                queue.push(current.left);
            }

            if(current.right) {
                queue.push(current.right);
            }

            counter -= 1;
        }
        return currentLevel;
    }

    while(queue.length) {
        let myCurrentLevel = getLevelOrder();
        levelOrder.push(myCurrentLevel);
    }

    return levelOrder;
  }
}

let bfs = new BreadFirstSearch();

let inputArray = [16, 8, 20, 4, 12, 18, 22, 21, 25];
let value;
for (let i = 0; i < inputArray.length; i++) {
  value = inputArray[i];
  bfs.insert(value);
}

console.log(bfs.levelOrder());
