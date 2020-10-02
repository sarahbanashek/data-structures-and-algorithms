const testGraph = require('./testGraph2');
const dijkstras = require('./dijkstras');

const shortestPath = (graph, startingVertex, targetVertex) => {
    const { distances, previous } = dijkstras(graph, startingVertex);
    const distance = distances[targetVertex.data];
    const path = [];
    let vertex = targetVertex;

    while (vertex) {
        path.unshift(vertex);
        vertex = previous[vertex.data];
    }

    return {distance, path};
}


// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue('A');
const g = testGraph.getVertexByValue('G');
const results = shortestPath(testGraph, a, g);
console.log(results);

module.exports = shortestPath;