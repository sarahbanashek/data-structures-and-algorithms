class Tree {
    constructor(data) {
      this.data = data;
      this.children = [];
    }

    addChild(child) {
        if (child instanceof Tree) {
            this.children.push(child);
        } else {
            this.children.push(new Tree(child));
        }
        return this.children[this.children.length - 1];
    }

    removeChild(childToRemove) {
        const length = this.children.length;
        this.children = this.children.filter(child => {
            return childToRemove instanceof Tree 
                ? childToRemove !== child 
                : childToRemove !== child.data

        })
        if (length === this.children.length) {
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }

    getChildByData(data) {
        for (const child of this.children) {
            if (child.data === data) {
                return child;
            } else {
                const match = child.getChildByData(data);
                if (match) {
                    return match;
                }
            }
        }
    }

    printTree(level = 0) {
        let tree = '';
        for (let i = 0; i < level; i++) {
            tree += '--';
        }
        console.log(`${tree} ${this.data}`);
        this.children.forEach(child => child.printTree(level + 1));
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

module.exports = Tree;