# Binary Search Tree
A [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) is a data structure in which each node has at most two children (left child and right child).

The value of the left child is always less than the parent node, and the value of the right child is always greater than or equal to the parent node.

## Constructor
The binary search tree takes a single argument representing the root of the tree.
```
const binarySearchTree = new BinarySearchTree(value);
```

## Methods
### \#.insert()
Given a value as an argument, adds a new child node to the tree while maintaining correct value order. Returns the new node.
```
binarySearchTree.insert(value);

const five = binarySearchTree.insert(5);
console.log(five);
>>>  BinarySearchTree { value: 5, depth: 2, left: null, right: null }
```

### \#.getNodeByValue()
Given a value as an argument, searches the tree for that value. Returns the first occurence of the value if found, returns `null` if not found. 
```
binarySearchTree.getNodeByValue(value);
```

### \#.printDepthFirstTraversal()
Executes an in-order traversal so that values are printed to the console in ascending order. The depth of the node is printed along with the value.
```
const binarySearchTree = new BinarySearchTree(15);
let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];
numbers.forEach(num => binarySearchTree.insert(num));

binarySearchTree.printDepthFirstTraversal();
>>> Depth: 4; Value: 8
>>> Depth: 3; Value: 10
>>> Depth: 4; Value: 11
>>> Depth: 2; Value: 12
>>> Depth: 4; Value: 12
>>> Depth: 3; Value: 13
>>> Depth: 4; Value: 14
>>> Depth: 1; Value: 15
>>> Depth: 4; Value: 16
>>> Depth: 3; Value: 18
>>> Depth: 4; Value: 19
>>> Depth: 2; Value: 20
>>> Depth: 4; Value: 21
>>> Depth: 3; Value: 22
>>> Depth: 4; Value: 25
```