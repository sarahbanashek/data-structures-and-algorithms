/* 
TODO: 
- add method to list the nighbors of a vertex
- add method to change the value associated with a vertex
*/
const Queue = require('../../linear_data_structures/Queue/Queue');
const PriorityQueue = require('../PriorityQueue/PriorityQueue');

class Graph {
    constructor(isDirected = false, isWeighted = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
        return newVertex;
    }

    removeVertex(vertex) {
        if (vertex instanceof Vertex) {
            this.vertices = this.vertices.filter(v => v !== vertex);
        } else {
            this.vertices = this.vertices.filter(v => v.data !== vertex);
        }
        
    }

    addEdge(vertex1, vertex2, weight) {
        const edgeWeight = this.isWeighted ? weight : null;
        if (vertex1 instanceof Vertex && vertex2 instanceof Vertex) {
            vertex1.addEdge(vertex2, edgeWeight);
            if (!this.isDirected) {
                vertex2.addEdge(vertex1, edgeWeight);
            }
        } else {
            const v1 = this.vertices.find(vertex => vertex.data === vertex1);
            const v2 = this.vertices.find(vertex => vertex.data === vertex2);
            v1.addEdge(v2, edgeWeight);
            if (!this.isDirected) {
                v2.addEdge(v1, edgeWeight);
            }
        }
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 instanceof Vertex && vertex2 instanceof Vertex) {
            if (!this.adjacent(vertex1, vertex2)) {
                throw new Error(`There is no edge to remove between ${vertex1.data} and ${vertex2.data}`);
            }
            vertex1.removeEdge(vertex2);
            if (!this.isDirected) {
                vertex2.removeEdge(vertex1);
            }
        } else {
            const v1 = this.vertices.find(vertex => vertex.data === vertex1);
            const v2 = this.vertices.find(vertex => vertex.data === vertex2);
            if (!this.adjacent(v1, v2)) {
                throw new Error(`There is no edge to remove between ${v1.data} and ${v2.data}`);
            }
            v1.removeEdge(v2);
            if (!this.isDirected) {
                v2.removeEdge(v1);
            }
        }
    }

    getVertexByValue(value) {
        return this.vertices.find(vertex => vertex.data === value);
    }
    
    adjacent(startVertex, endVertex) {
        if (startVertex instanceof Vertex && endVertex instanceof Vertex) {
            const edgeMatch = startVertex.edges.find(edge => edge.end === endVertex);
            return edgeMatch
                ? true
                : false;
        } else {
            const start = this.vertices.find(vertex => vertex.data === startVertex);
            const end = this.vertices.find(vertex => vertex.data === endVertex);
            const edgeMatch = start.edges.find(edge => edge.end === end);
            return edgeMatch
                ? true
                : false;
        }
    }

    traverseDepthFirst(startingVertex, callback = function(vertex) {console.log(vertex.data)}, visitedVertices = [startingVertex]) {
        callback(startingVertex);
        startingVertex.edges.forEach(edge => {
            const neighbor = edge.end;
            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                this.traverseDepthFirst(neighbor, callback, visitedVertices);
            }
        });
    }

    traverseBreadthFirst(startingVertex, callback = function(visitedVertices) {
      for (const vertex of visitedVertices) {
        console.log(vertex.data);
    }}) {
        const visitedVertices = [startingVertex];
        const visitQueue = new Queue();
        visitQueue.enqueue(startingVertex);

        while (!visitQueue._isEmpty()) {
            const current = visitQueue.dequeue();

            current.edges.forEach(edge => {
                const neighbor = edge.end;
                if (!visitedVertices.includes(neighbor)) {
                    visitedVertices.push(neighbor);
                    visitQueue.enqueue(neighbor);
                }
            });
        }
        callback(visitedVertices);
    }

    printGraph() {
        this.vertices.forEach(vertex => vertex.print());
    }

    dijkstras(startingVertex) {
        const distances = {};
        const previous = {};
        const queue = new PriorityQueue();
        queue.add({ data: startingVertex, priority: 0 });
    
        this.vertices.forEach(vertex => {
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

    shortestPath(startingVertex, targetVertex) {
        const { distances, previous } = this.dijkstras(startingVertex);
        const distance = distances[targetVertex.data];
        const path = [];
        let vertex = targetVertex;
    
        while (vertex) {
            path.unshift(vertex);
            vertex = previous[vertex.data];
        }
        return { distance, path };
    }
}


class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    addEdge(endVertex, weight) {
        if (endVertex instanceof Vertex) {
            this.edges.push(new Edge(this, endVertex, weight))
        } else {
            throw new Error('Expected Vertex argument.')
        }
    }

    removeEdge(endVertex) {
        this.edges = this.edges.filter(edge => edge.end !== endVertex);
    }

    print() {
        const edgeList = this.edges.map(edge => {
            return edge.weight === null
                ? edge.end.data
                : `${edge.end.data} (${edge.weight})`;
        });
        const display = `${this.data} --> ${edgeList.join(', ')}`
        console.log(display);
    }
}


class Edge {
    constructor(start, end, weight = null) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
}

module.exports = {Graph, Vertex, Edge};