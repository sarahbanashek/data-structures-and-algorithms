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
        this.vertices = this.vertices.filter(v => v !== vertex);
    }

    addEdge(vertex1, vertex2, weight) {
        if (vertex1 instanceof Vertex && vertex2 instanceof Vertex) {
            let edgeWeight = this.isWeighted ? weight : null;
            vertex1.addEdge(vertex2, edgeWeight);
            if (!this.isDirected) {
                vertex2.addEdge(vertex1, edgeWeight);
            }
        } else {
            throw new Error('Expected Vertex arguments.');
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

    print() {
        this.vertices.forEach(vertex => vertex.print());
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

module.exports = Graph;