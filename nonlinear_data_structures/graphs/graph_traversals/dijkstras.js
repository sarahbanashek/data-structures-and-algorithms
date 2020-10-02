const testGraph = require('./testGraph2');
const PriorityQueue = require('../../nonlinear_data_structures/PriorityQueue/PriorityQueue');

const dijkstras = (graph, startingVertex) => {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();
    queue.add({ data: startingVertex, priority: 0 });

    graph.vertices.forEach(vertex => {
        distances[vertex.data] = Infinity;
        previous[vertex.data] = null;
    });
    distances[startingVertex.data] = 0;

    while (!queue.isEmpty()) {
        const vertex = queue.popMin().data;

        vertex.edges.forEach(edge => {
            const alternate = edge.weight + distances[vertex.data];
            const neighbor = edge.end;
            const neighborData = edge.end.data;

            if (alternate < distances[neighborData]) {
                distances[neighborData] = alternate;
                previous[neighborData] = vertex;
                queue.add({data: neighbor, priority: distances[neighborData]});
            }
        })
    }
    return { distances, previous };
}

const results = dijkstras(testGraph, testGraph.vertices[0]);
// console.log(results);



module.exports = dijkstras;