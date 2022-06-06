class FindAllPaths{
    allPathsSourceTarget = function(graph) {
        let currentNode = 0;
        let currentPath = [];
        let searchedElement = graph.length-1;
        let paths = [];
        this.findPath(graph, currentNode, currentPath, searchedElement, paths);
        return paths;
    };
    
    
    findPath = function(graph, currentNode, currentPath, searchedElement, paths) {    
        currentPath.push(currentNode);
        
        if(currentNode === searchedElement) {
            paths.push(currentPath.slice());
            return;
        }    
        
        for(let node of graph[currentNode]) {
            this.findPath(graph, node, currentPath, searchedElement, paths);
            currentPath.pop();
        }
    }
}
    
let findAllPaths = new FindAllPaths(); 
let graph = [[1,2],[3],[3],[]];
let result = findAllPaths.allPathsSourceTarget(graph);
console.log(result);