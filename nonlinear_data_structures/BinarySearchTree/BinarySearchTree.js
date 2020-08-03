class BinarySearchTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new BinarySearchTree(value, this.depth + 1);
            }
        } else {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BinarySearchTree(value, this.depth + 1);
            }
        }
    }

    getNodeByValue(value) {
        if (value === this.value) {
            return this;
        } else if (this.left && value < this.value) {
            return this.left.getNodeByValue(value);
        } else if (this.right && value > this.value) {
            return this.right.getNodeByValue(value);
        } else {
            return null;
        }
    }

    printDepthFirstTraversal() {
        if (this.left) {
            this.left.printDepthFirstTraversal();
        }
        console.log(`Depth: ${this.depth}; Value: ${this.value}`);
        if (this.right) {
            this.right.printDepthFirstTraversal();
        }
    }
}

const binarySearchTree = new BinarySearchTree(15);
let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];
numbers.forEach(num => binarySearchTree.insert(num));

// for (let i = 0; i < numbers.length; i++) {
//   bt.insert(numbers[i]);
// //   console.log(`Insert ${numbers[i]}`);
// }

console.log('Depth First Traversal');
binarySearchTree.printDepthFirstTraversal();
// console.log(binarySearchTree.getNodeByValue(12));

module.exports = BinarySearchTree;