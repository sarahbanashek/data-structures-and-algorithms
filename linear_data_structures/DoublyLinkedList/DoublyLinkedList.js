const Node = require('../Node/Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    }

    addToTail(data) {
        const newTail = new Node(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        if (this.head) {
            this.head.setPreviousNode(null);
        }
        if (removedHead === this.tail) {
            this.removeTail();
        }
        return removedHead.data;
    }

    removeTail() {
        const removedTail = this.tail;
        if (!removedTail) {
            return;
        }
        this.tail = removedTail.getPreviousNode();
        if (this.tail) {
            this.tail.setNextNode(null);
        }
        if (removedTail === this.head) {
            this.removeHead();
        }
        return removedTail.data;
    }

    removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                nodeToRemove = currentNode;
                break;
          }
          currentNode = currentNode.getNextNode();
        }
        if (!nodeToRemove) {
            return null;
        }

        if (nodeToRemove === this.head) {
            this.removeHead();
        } else if (nodeToRemove === this.tail) {
            this.removeTail();
        } else {
            const nextNode = nodeToRemove.getNextNode();
            const previousNode = nodeToRemove.getPreviousNode(); 
            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        }
        return nodeToRemove;
    }

    printList() {
        let currentNode = this.head;
        let output = `<HEAD> `;
        while (currentNode) {
            if(currentNode.getNextNode()) {
                output += `${currentNode.data}, `;
            } else {
                output += `${currentNode.data} `;
            }
            currentNode = currentNode.getNextNode();
        }
        output += `<TAIL>`;
        console.log(output);
    }
}

const subway = new DoublyLinkedList();

subway.addToHead(1);
// subway.addToHead(2);
// subway.addToHead(3);

subway.addToTail(2);
subway.addToTail(3);
// subway.addToTail('BrooklynBridge');

// subway.removeHead();
// subway.removeTail();
subway.removeByData(2);

subway.printList();




module.exports = DoublyLinkedList;