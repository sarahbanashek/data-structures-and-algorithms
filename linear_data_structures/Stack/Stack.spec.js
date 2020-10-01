const Stack = require('./Stack');

describe('Class: Stack', () => {
    describe('Method: push', () => {
        it('throws an error if stack is full', () => {
            const stack = new Stack(0);

            expect(() => {
                stack.push(1);
            }).toThrow();
        });
        it('adds a new node to the head of the stack and updates the stack size', () => {
            const stack = new Stack();
            stack.push('A');
            const headData = stack.stack.head.data;
            const stackSize = stack.size;

            expect(headData).toBe('A');
            expect(stackSize).toBe(1);
        });
    });
    describe('Method: pop', () => {
        it('throws an error if stack is empty', () => {
            const stack = new Stack();

            expect(() => {
                stack.pop();
            }).toThrow();
        });
        it('removes the head node, returns its data, and updates the stack size', () => {
            const stack = new Stack();
            stack.push('A');
            
            const poppedData = stack.pop();
            const stackSize = stack.size;

            expect(poppedData).toBe('A');
            expect(stackSize).toBe(0);
        });
    });
    describe('Method: peek', () => {
        it(`returns the head node's data without modifying the stack`, () => {
            const stack = new Stack();
            stack.push('A');

            const headData = stack.peek();
            const stackSize = stack.size;

            expect(headData).toBe('A');
            expect(stackSize).toBe(1);
        });
    });
});