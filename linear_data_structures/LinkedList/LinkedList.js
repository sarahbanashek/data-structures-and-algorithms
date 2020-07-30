const Node = require('../Node/Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
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

const seasons = new LinkedList();
seasons.addToHead(1);
// seasons.addToHead('spring');

seasons.addToTail(2);
seasons.addToTail(3);
seasons.removeHead();

seasons.printList();  

module.exports = LinkedList;