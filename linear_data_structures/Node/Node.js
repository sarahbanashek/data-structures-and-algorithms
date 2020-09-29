class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
  
    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            this.next = new Node(node);
        }
    }
  
    setPreviousNode(node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        } else {
            this.previous = new Node(node);
        }
    }
  
    getNextNode() {
        return this.next;
    }
  
    getPreviousNode() {
        return this.previous;
    }
}



module.exports = Node;