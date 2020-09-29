# Graph
A [graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) is a data structure consisting of a set of vertices and the edges that connect them.

Each vertex belonging to a graph is stored in an array in its `vertices` property. Similarly, edges are stored in the vertex's `edges` property as an array.

## Constructor
The `Graph` class takes two optional boolean arguments. The first parameter, `isDirected` 
restricts the addition of edges to only one direction between vertices when set to `true`. The second, `isWeighted`, allows integer values to be associated with each edge when set to `true`. Both parameters default to `false`.

```
const graph = new Graph(isDirected, isWeighted);

// Undirected & unweighted Graph instance:
const graph = new Graph();

// Directed & unweighted Graph instance:
const graph = new Graph(true);

// Undirected & weighted Graph instance:
const graph = new Graph(false, true);

// Directed & weighted Graph instance:
const graph = new Graph(true, true);
```

## Methods
### \#.addVertex()
Takes a single argument representing the value to be associated with the new vertex. Creates a new `Vertex` instance, pushes it onto the graph's `vertices` array, and returns the new vertex.
```
graph.addVertex(data);

const a = graph.addVertex('A');
```

### \#.removeVertex()
Takes an argument that is either a `Vertex` instance or the value stored in a vertex's `data` property.
```
graph.removeVertex(a);

// or

graph.removeVertex('A');
```
If multiple vertices share the same value and the `removeVertex` method is called with that value, all matching vertices will be removed.

### \#.addEdge()
Takes a starting vertex, ending vertex, and an optional weight value as arguments. If the graph is undirected, a second edge will also be added from the ending vertex to the starting vertex.
```
graph.addEdge(start, end, weight);
```
The vertices can be either `Vertex` instances, or the values associated with vertices **(a mix of both is not supported)**.
```
graph.addEdge(a, b);

// or

graph.addEdge('A', 'B');
```

### \#.removeEdge()
Takes a starting vertex and an ending vertex. If the graph is undirected, the edge connecting the ending vertex to the starting vertex will also be removed.
```
graph.removeEdge(start, end);
```
The vertices can be either `Vertex` instances, or the values associated with vertices **(a mix of both is not supported)**.
```
graph.removeEdge(a, b);

// or

graph.removeEdge('A', 'B');
```

### \#.adjacent()
Takes a start vertex and an end vertex as arguments. Returns `true` if the end vertex can be found in the edges of the start vertex, otherwise returns `false`.
```
graph.adjacent(startVertex, endVertex);
```
If the graph is directed, it is important to input the vertices in the correct order.

### \#.getVertexByValue()
Returns the vertex associated with the given value.
```
const vertex = graph.getVertexByValue(value);
```

### \#.printGraph()
Each vertex is printed along with the vertices that share its edges. If the graph is weighted, the weight associated with each edge is included in parentheses.
```
// testGraph is a directed and weighted graph
testGraph.printGraph();

>>>  A --> C (100), B (3), D (4)
>>>  B --> G (9)
>>>  C --> 
>>>  D --> C (3), E (8)
>>>  E --> B (-2), F (10), G (-50)
>>>  F --> 
>>>  G --> 
```

### \#.traverseDepthFirst()
Uses recursion to complete a depth-first traversal of the graph. Requires a starting vertex as the first argument **(must be a Vertex instance)** and has an optional second parameter that defaults to logging each vertex's data to the console.
```
graph.traverseDepthFirst(startingVertex, optionalCallback);
```
Example of a callback that stores a depth-first order of vertex data in the array `depthFirstData`:
```
const depthFirstData = [];
function storeData(vertex) {
    depthFirstData.push(vertex.data);
}

testGraph.traverseDepthFirst(a, storeData);
```

### \#.traverseBreadthFirst()
Completes a breadth-first traversal of the graph. Requires a starting vertex as the first argument **(must be a Vertex instance)** and has an optional second parameter that defaults to logging each vertex's data to the console.
```
graph.traverseBreadthFirst(startingVertex, optionalCallback);
```
Example of a callback that stores a breadth-first order of vertex data in the array `breadthFirstData`:
```
const breadthFirstData = [];
function storeData(vertices) {
    for (const vertex of vertices) {
        breadthFirstData.push(vertex.data);
    }
}

testGraph.traverseBreadthFirst(a, storeData);
```

### \#.dijkstras()
Takes a starting vertex as an argument **(must be a Vertex instance)**. 
```
graph.dijkstras(startingVertex);
```
Returns the object `{ distances, previous }`.

`distances` is an object that contains each vertex that is accessible from the starting vertex and the shortest possible distances to those vertices. 

`previous` is an object that contains each vertex that is accessible from the starting vertex and the vertex that came just before it along the shortest path.
```
const result = testGraph.dijkstras(a);

console.log(result);
>>>  { distances: { A: 0, B: 3, C: 7, D: 4, E: 12, F: 22, G: -38 },
>>>    previous:
>>>     { A: null,
>>>       B: Vertex { data: 'A', edges: [Array] },
>>>       C: Vertex { data: 'D', edges: [Array] },
>>>       D: Vertex { data: 'A', edges: [Array] },
>>>       E: Vertex { data: 'D', edges: [Array] },
>>>       F: Vertex { data: 'E', edges: [Array] },
>>>       G: Vertex { data: 'E', edges: [Array] } } }
```

### \#.shortestPath()
Uses the `dijkstras` method to determine the shortest path between two vertices. Takes a starting vertex and a target vertex as arguments **(must be Vertex instances)**.
```
graph.shortestPath(startingVertex, targetVertex);
```
Returns the object `{ distance, path }`, where `path` lists the vertices visited from the starting vertex to the target vertex in an array.
```
const result = testGraph.shortestPath(a, g);

console.log(result);
>>>  { distance: -38,
>>>    path:
>>>     [ Vertex { data: 'A', edges: [Array] },
>>>       Vertex { data: 'D', edges: [Array] },
>>>       Vertex { data: 'E', edges: [Array] },
>>>       Vertex { data: 'G', edges: [] } ] }
```