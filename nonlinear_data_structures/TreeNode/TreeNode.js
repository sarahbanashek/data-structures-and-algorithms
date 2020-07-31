class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }

    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child);
        } else {
            this.children.push(new TreeNode(child));
        }
    }

    removeChild(childToRemove) {
        const length = this.children.length;
        this.children = this.children.filter(child => {
            childToRemove instanceof TreeNode ?
                childToRemove !== child :
                childToRemove !== child.data

        })
        if (length === this.children.length) {
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }

    printTree(level = 0) {
        let tree = '';
        for (let i = 0; i < level; i++) {
            tree += '--';
        }
        console.log(`${tree} ${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }

    printDepthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.printDepthFirstTraversal());
    }

    printBreadthFirstTraversal() {
        let toPrint = [this];
        while (toPrint.length > 0) {
            const current = toPrint.shift();
            console.log(current.data);
            toPrint = toPrint.concat(current.children);
        }
    }
  };
  
module.exports = TreeNode;