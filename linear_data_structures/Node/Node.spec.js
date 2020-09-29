const Node = require('./Node');

describe('Class: Node', () => {
    describe('Methods: setNextNode & setPreviousNode', () => {
        const node1 = new Node('parent node 1');
        const node2 = new Node('parent node 2');
        it('sets the next node when given a Node instance', () => {
            const nextNode = new Node('next node 1');
            node1.setNextNode(nextNode);

            expect(node1.next).toBe(nextNode);
        });
        it('sets the next node when given data', () => {
            const nextNodeData = 'next node 2';
            node2.setNextNode(nextNodeData);

            expect(node2.next).not.toBeNull();
            expect(node2.next.data).toBe(nextNodeData);
        });
        it('sets the previous node when given a Node instance', () => {
            const previousNode = new Node('previous node 1');
            node1.setPreviousNode(previousNode);

            expect(node1.previous).toBe(previousNode);
        });
        it('sets the previous node when given data', () => {
            const previousNodeData = 'previous node 2';
            node2.setPreviousNode(previousNodeData);

            expect(node2.previous).not.toBeNull();
            expect(node2.previous.data).toBe(previousNodeData);
        });
    });
    describe('Methods: getNextNode & getPreviousNode', () => {
        const node = new Node('parent node');

        it('returns the node stored in the node\'s next property', () => {
            const nextNode = new Node('next node');
            node.setNextNode(nextNode);

            const result = node.getNextNode();

            expect(result).toBe(nextNode);
        });
        it('returns the node stored in the node\'s previous property', () => {
            const previousNode = new Node('previous node');
            node.setPreviousNode(previousNode);

            const result = node.getPreviousNode();

            expect(result).toBe(previousNode);
        });
    });
});