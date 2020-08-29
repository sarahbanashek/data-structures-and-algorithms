const Queue = require('../linear_data_structures/Queue/Queue');
const PriorityQueue = require('../nonlinear_data_structures/PriorityQueue/PriorityQueue');

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
            vertex1.removeEdge(vertex2);
            if (!this.isDirected) {
                vertex2.removeEdge(vertex1);
            }
        } else {
            throw new Error('Expected Vertex arguments.');
        }
    }

    getVertexByValue(value) {
        return this.vertices.find(vertex => vertex.data === value);
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

        while (!visitQueue.isEmpty()) {
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

    printVertices() {
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
        const display = `${this.data} --> ${edgeList.join(',\n\t\t')}`
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


// const trainNetwork = new Graph(true, true);

// const la = trainNetwork.addVertex('Los Angeles');
// const sf = trainNetwork.addVertex('San Francisco');
// const ny = trainNetwork.addVertex('New York');
// const atlanta = trainNetwork.addVertex('Atlanta');
// const denver = trainNetwork.addVertex('Denver');
// const calgary = trainNetwork.addVertex('Calgary');

// trainNetwork.addEdge(la, sf, 400);
// trainNetwork.addEdge(sf, la, 400);
// trainNetwork.addEdge(ny, denver, 1800);
// trainNetwork.addEdge(denver, ny, 1800);
// trainNetwork.addEdge(calgary, denver, 1000);
// trainNetwork.addEdge(denver, calgary, 1000);
// trainNetwork.addEdge(la, atlanta, 2100);
// trainNetwork.addEdge(atlanta, la, 2100);

// trainNetwork.print();

// trainNetwork.removeEdge(ny, denver);
// trainNetwork.removeEdge(calgary, denver);
// trainNetwork.removeEdge(denver, calgary);
// trainNetwork.removeVertex(calgary);

// trainNetwork.print();

module.exports = {Graph, Vertex, Edge};