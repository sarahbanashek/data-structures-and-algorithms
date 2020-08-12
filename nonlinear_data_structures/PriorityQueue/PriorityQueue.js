class PriorityQueue {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }
  
    add({node, priority}) {
        this.heap.push({node, priority});
        this.size++;
        this._bubbleUp();
    }
  
    popMin() {
        if (this._isEmpty()) {
            return null 
        }
        const min = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.size--;
        this.heap.pop();
        this._heapify();
        return min;
    }
  
    _bubbleUp() {
        let current = this.size;
        while (current > 1 && this.heap[getParent(current)].priority > this.heap[current].priority) {
            this._swap(current, getParent(current));
            current = getParent(current);
        }
    }
  
    _heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);
        // Check that there is something to swap (only need to check the left if both exist)
        while (this._canSwap(current, leftChild, rightChild)){
            // Only compare left & right if they both exist
            if (this._exists(leftChild) && this._exists(rightChild)) {
                // Make sure to swap with the smaller of the two children
                if (this.heap[leftChild].priority < this.heap[rightChild].priority) {
                    this._swap(current, leftChild);
                    current = leftChild;
                } else {
                    this._swap(current, rightChild);
                    current = rightChild;
                }
            } else {
                // If only one child exist, always swap with the left
                this._swap(current, leftChild);
                current = leftChild;
            }
            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
    }

    _isEmpty() {
        return this.size === 0;
    }
  
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
    _exists(index) {
        return index <= this.size;
    }
  
    _canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
            this._exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority
            || this._exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority
        );
    }
}
  
const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = PriorityQueue;