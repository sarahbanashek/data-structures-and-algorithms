const Tree = require('./Tree');

describe('Class: Tree', () => {
    describe('Method: addChild', () => {
        const tree = new Tree('root node');
        it('adds a Tree instance as a child', () => {
            const child = new Tree('Tree instance');
            
            tree.addChild(child);

            expect(tree.children).toEqual(expect.arrayContaining([child]));
        });
        it('adds a child by data', () => {
            const childByData = tree.addChild('child by data');

            expect(tree.children).toEqual(expect.arrayContaining([childByData]));
        });
    });
    describe('Method: removeChild', () => {
        const tree = new Tree('root node');
        const a = tree.addChild('a');
        const b = tree.addChild('b');
        it('removes a child by Tree instance', () => {
            tree.removeChild(a);

            expect(tree.children).toEqual(expect.not.arrayContaining([a]));
        });
        it('removes a child by data', () => {
            tree.removeChild('b');

            expect(tree.children).toEqual(expect.not.arrayContaining([b]));
        });
    });
    describe('Method: getChildByData', () => {
        it('returns the child associated with the given data', () => {
            const tree = new Tree('root node');
            tree.addChild('x');
            tree.addChild('y');
            const z = tree.addChild('z');

            const result = tree.getChildByData('z');

            expect(result).toEqual(z);
        });
    });
});