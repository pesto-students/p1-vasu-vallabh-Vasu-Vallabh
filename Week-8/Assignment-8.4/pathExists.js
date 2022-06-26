/* 
    1. create a class called graph 
        a. Number of nodes with zero
        b. An Adjacent list -> new Map

    2. Graph functions
        a. insert vertex
        b. insert edge
        c. remove edge
        d. remove vertex
        e. show connections.
*/

class Graph{
    
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = new Map(); 
    }

    insertVertex(node) {
        this.adjacentList.set(node, [])
        this.numberOfNodes += 1;
    }

    insertEdge(node1, node2) {
        if(!this.adjacentList.has(node1)) {
            this.insertVertex(node1);
        }
        
        if(!this.adjacentList.has(node2)) {
            this.insertVertex(node2);
        }

        this.adjacentList.get(node1).push(node2);
        this.adjacentList.get(node2).push(node1);
    }

    showConnections() {
        [...this.adjacentList.keys()].forEach((key) => {
            console.log(`${key} -> ${this.adjacentList.get(key)}`);
        })
    }

    // node1 -> 0, node2 -> 1
    removeEdge(node1, node2) {
        
        if(this.adjacentList.has(node1)) {
            let filteredArray = this.adjacentList.get(node1).filter((node) => node != node2);
            this.adjacentList.set(node1, filteredArray);
        }

        if(this.adjacentList.has(node2)) {
            let filteredArray = this.adjacentList.get(node2).filter((node) => node != node1);
            this.adjacentList.set(node2, filteredArray);
        }

    }

    removeVertex(node1){
        this.adjacentList.get(node1).map((node) => {
            this.removeEdge(node1, node);
        })
        this.adjacentList.delete(node1);
    }

    //bfs
    pathExists(node1, node2) {
        /* 
            take queue
            use set to eleminate the visited 
            if not visited push the adj array into queue
            if found return true else false
        */

        let queue = [];
        queue.push(node1);
        let seen = new Set();

        while(queue.length) {
            let current =  queue.shift();
            
            if(!seen.has(current)) {
                seen.add(current);

                //this will avoid itelf and duplicates to the queue.
                this.adjacentList.get(current)
                    .filter(node => !seen.has(node) && !queue.includes(node))
                    .forEach(node => queue.push(node)) // enqueue
                if(current === node2) {
                    return true;
                }
            }
        }
        return false;
    }

}

let myGraph = new Graph();
let inputArray = [[0,1],[0,2],[3,5],[5,4],[4,3]];
//let inputArray = [[0,1],[1,2],[2,0]];

for(let i=0; i<inputArray.length; i++) {
    [node1, node2] = inputArray[i];
    myGraph.insertEdge(node1, node2);
}

/* 
myGraph.showConnections();
myGraph.removeVertex(0);
myGraph.showConnections();
*/

console.log(myGraph.pathExists(0,5));