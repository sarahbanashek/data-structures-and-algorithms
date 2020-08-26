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

    describe('Traversals', () => {
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
});