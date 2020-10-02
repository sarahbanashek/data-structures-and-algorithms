const testGraph = require('./testGraph');
const Queue = require('../../linear_data_structures/Queue');

const breadthFirstTraversal = (start) => {
    const visitedVertices = [start];
    const visitQueue = new Queue();
    visitQueue.enqueue(start);
    
    while (!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        console.log(current.data);

        current.edges.forEach(edge => {
            const neighbor = edge.end;
            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        });
    
        console.log(visitedVertices);
    }
}

breadthFirstTraversal(testGraph.vertices[0]);