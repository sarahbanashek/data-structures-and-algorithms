const {Graph, Vertex, Edge} = require('./Graph');


describe('Class: Graph', () => {
    describe('Method: addVertex', () => {
        it('Should add a vertex', () => {
            const graph = new Graph();
            const vertexData = 'vertex';
            const vertex = new Vertex(vertexData);
            graph.addVertex(vertexData);

            expect(graph.vertices).toContainEqual(vertex);         
        })
    });

    describe('Method: removeVertex', () => {
        it('Should remove a vertex by vertex instance', () => {
            const graph = new Graph();
            const vertexData = 'vertex';
            const vertex = graph.addVertex(vertexData);
            graph.removeVertex(vertex);

            expect(graph.vertices).toHaveLength(0);
        });
        it('Should remove a vertex by data', () => {
            const graph = new Graph();
            const vertexData = 'vertex';
            graph.addVertex(vertexData);
            graph.removeVertex(vertexData);

            expect(graph.vertices).toHaveLength(0);
        });
    });

    describe('Non-weighted traversals', () => {
        const graph = new Graph();
        const vertices =['a', 'b', 'c', 'd', 'e', 'f'];
        const edges = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['d', 'e'], ['c', 'f']];
        
        vertices.forEach(v => graph.addVertex(v));
        edges.forEach(startAndEnd => graph.addEdge(startAndEnd[0], startAndEnd[1]));

        describe('Method: traverseDepthFirst', () => {
            it('Should record depth-first order', () => {
                const expected = ['a', 'b', 'd', 'e', 'c', 'f'];
                
                const resultArr = [];
                graph.traverseDepthFirst(graph.vertices[0], function(vertex) {resultArr.push(vertex.data)});
    
                expect(resultArr).toStrictEqual(expected);
            });
        });

        describe('Method: traverseBreadthFirst', () => {
            it('Should record breadth-first order', () => {
                const expected = ['a', 'b', 'c', 'd', 'f', 'e'];
                const resultArr = [];
                graph.traverseBreadthFirst(graph.vertices[0], function(visitedVertices) {
                    for (const vertex of visitedVertices) {
                        resultArr.push(vertex.data);
                    }
                });
    
                expect(resultArr).toStrictEqual(expected);
            });
        });
    });

    describe('Weighted traversals', () => {
        const graph = new Graph(true, true);
        const a = graph.addVertex('A');
        const b = graph.addVertex('B');
        const c = graph.addVertex('C');
        const d = graph.addVertex('D');
        const e = graph.addVertex('E');
        const f = graph.addVertex('F');
        const g = graph.addVertex('G');

        graph.addEdge(a, c, 100);
        graph.addEdge(a, b, 3);
        graph.addEdge(a, d, 4);
        graph.addEdge(d, c, 3);
        graph.addEdge(d, e, 8);
        graph.addEdge(e, b, -2);
        graph.addEdge(e, f, 10);
        graph.addEdge(b, g, 9);
        graph.addEdge(e, g, -50);

        describe('Method: dijkstras', () => {
            it('Should return shortest distances & previously visited vertices', () => {
                const expectedDistances = { A: 0, B: 3, C: 7, D: 4, E: 12, F: 22, G: -38 };
                const expectedPrevious = { A: null,
                    B: a,
                    C: d,
                    D: a,
                    E: d,
                    F: e,
                    G: e };
                const results = graph.dijkstras(graph.vertices[0]);
                expect(results.distances).toStrictEqual(expectedDistances);
                expect(results.previous).toStrictEqual(expectedPrevious);
            });
        });
    });
});