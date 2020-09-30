const LinkedList = require('./LinkedList');

describe('Class: LinkedList', () => {
    describe('Method: addToHead', () => {
        it(`adds to the linked list's head`, () => {
            const linkedList = new LinkedList();
            linkedList.addToHead(1);
            linkedList.addToHead(2);
            
            expect(linkedList.head.data).toBe(2);
            expect(linkedList.head.next.data).toBe(1);
        });
    });
    describe('Method: addToTail', () => {
        it(`adds to the linked list's tail`, () => {
            const linkedList = new LinkedList();
            linkedList.addToTail(1);
            linkedList.addToTail(2);

            expect(linkedList.head.data).toBe(1);
            expect(linkedList.head.next.data).toBe(2);
        });
    });
    describe('Method: removeHead', () => {
        it('removes the head node from the linked list', () => {
            const linkedList = new LinkedList();
            linkedList.addToTail(1);
            linkedList.addToTail(2);
            const removedHead = linkedList.removeHead();

            expect(linkedList.head.data).toBe(2);
            expect(removedHead).toBe(1);
        });
    });
});