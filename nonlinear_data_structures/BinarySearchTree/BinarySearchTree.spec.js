const BinarySearchTree = require('./BinarySearchTree');

describe('Class: BinarySearchTree', () => {
    describe('Method: insert', () => {
        it('places lower values on left and greater values on right', () => {
            const tree = new BinarySearchTree(15);
            const ten = tree.insert(10);
            const twenty = tree.insert(20);
    
            expect(tree.left).toEqual(ten);
            expect(tree.right).toEqual(twenty);
        });
        it('inserts into next level if necessary', () => {
            const tree = new BinarySearchTree(15);
            const twenty = tree.insert(20);
            const twentyfive = tree.insert(25);

            expect(twenty.right).toEqual(twentyfive);
        });
    });
    describe('Method: getNodeByValue', () => {
        it('returns the node associated with the given data', () => {
            const tree = new BinarySearchTree(15);
            tree.insert(5);
            tree.insert(20);
            const ten = tree.insert(10);

            const result = tree.getNodeByValue(10);

            expect(result).toEqual(ten);
        });
        it('returns null if data does not exist in tree', () => {
            const tree = new BinarySearchTree(15);

            const result = tree.getNodeByValue(5);

            expect(result).toBeNull();
        });
    });
});
