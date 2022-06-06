class TownJudge{
    constructor() {
        this.numOfNodes = 0;
        this.adjacentList = new Map();
    }

    insertVertex(node) {
        this.adjacentList.set(node, []);
    }

    egde(node1, node2) {
        
        if(!this.adjacentList.has(node1)) {
            this.insertVertex(node1);
        }
        
        if(!this.adjacentList.has(node2)) {
            this.insertVertex(node2);
        }

        this.adjacentList.get(node1).push(node2);

    }

    print() {
        [...this.adjacentList.keys()].forEach(key => {
            console.log(`${key} -> ${this.adjacentList.get(key)}`)
        });
    }

    getTownJudge() {
        let j;
        for (const [key, value] of this.adjacentList) {
            if(!value.length) {
                j = key
            }
        }
        if(!j) {
            return -1;
        } else {
            return j
        }
    }
    
}

let townJudge = new TownJudge();

// let inputArray = [[1,2]];
// let inputArray = [[1,3], [2,3]];
let inputArray = [[1,3], [2,3], [3,1]];

let value;
for(let i = 0; i<inputArray.length; i++) {
    [node1, node2] = inputArray[i];
    townJudge.egde(node1, node2);
}
console.log(townJudge.getTownJudge());