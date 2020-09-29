const {Graph, Vertex, Edge} = require('./Graph');


describe('Class: Graph', () => {
    describe('Method: addVertex', () => {
        it('adds a vertex', () => {
            const graph = new Graph();
            const vertexData = 'vertex';
            const vertex = new Vertex(vertexData);
            
            graph.addVertex(vertexData);

            expect(graph.vertices).toContainEqual(vertex);         
        })
    });

    describe('Method: removeVertex', () => {
        const graph = new Graph();
        it('removes a vertex by vertex instance', () => {
            const vertex = graph.addVertex('vertex');
            
            graph.removeVertex(vertex);

            expect(graph.vertices).toEqual(expect.not.arrayContaining([vertex]));
        });
        it('removes a vertex by data', () => {
            const vertexData = 'vertex';
            const vertex = graph.addVertex(vertexData);
           
            graph.removeVertex(vertexData);

            expect(graph.vertices).toEqual(expect.not.arrayContaining([vertex]));
        });
        it('does nothing if given vertex not included in the graph', () => {
            const vertex = graph.addVertex('vertex');

            graph.removeVertex('not a vertex');

            expect(graph.vertices).toStrictEqual([vertex]);
        })
    });

    describe('Method: removeEdge', () => {
        it('removes edges in both directions in an undirected graph', () => {
            // also checks edge removal by vertex instance & for weighted graph
            const graph = new Graph(false, true);
            const a = graph.addVertex('A');
            const b = graph.addVertex('B');
            graph.addEdge(a, b, 10);

            graph.removeEdge(a, b);

            expect(a.edges).toHaveLength(0);
            expect(b.edges).toHaveLength(0);
        });

        it('removes edges in one direction in a directed graph', () => {
            // also checks edge removal by vertex data
            const graph = new Graph(true);
            const a = graph.addVertex('A');
            const b = graph.addVertex('B');
            graph.addEdge(a, b);
            graph.addEdge(b, a);

            graph.removeEdge('A', 'B');

            expect(a.edges).toHaveLength(0);
            expect(b.edges).toHaveLength(1);
        });

        it('throws an error if given vertices that don\'t share an edge', () => {
            const graph = new Graph;
            const a = graph.addVertex('A');
            const b = graph.addVertex('B');

            expect(() => {
                graph.removeEdge(a, b);
              }).toThrow();
        });
    });

    describe('Non-weighted traversals', () => {
        const graph = new Graph();
        const vertices =['a', 'b', 'c', 'd', 'e', 'f'];
        const edges = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['d', 'e'], ['c', 'f']];
        
        vertices.forEach(v => graph.addVertex(v));
        edges.forEach(startAndEnd => graph.addEdge(startAndEnd[0], startAndEnd[1]));

        describe('Method: traverseDepthFirst', () => {
            it('records depth-first order', () => {
                const expected = ['a', 'b', 'd', 'e', 'c', 'f'];
                
                const resultArr = [];
                graph.traverseDepthFirst(graph.vertices[0], function(vertex) {resultArr.push(vertex.data)});
    
                expect(resultArr).toStrictEqual(expected);
            });
        });

        describe('Method: traverseBreadthFirst', () => {
            it('records breadth-first order', () => {
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
            it('returns the shortest distances & previously visited vertices', () => {
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

        describe('Method: shortestPath', () => {
            it('returns the distance and path to target vertex', () => {
                const expectedDistance = -38;
                const expectedPath = [a, d, e, g];
                
                const results = graph.shortestPath(a, g);

                expect(results.distance).toEqual(expectedDistance);
                expect(results.path).toStrictEqual(expectedPath);
            });
        });
    });
});