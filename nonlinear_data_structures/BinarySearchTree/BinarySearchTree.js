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
                return this.left.insert(value);
            } else {
                this.left = new BinarySearchTree(value, this.depth + 1);
                return this.left;
            }
        } else {
            if (this.right) {
                return this.right.insert(value);
            } else {
                this.right = new BinarySearchTree(value, this.depth + 1);
                return this.right;
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


module.exports = BinarySearchTree;