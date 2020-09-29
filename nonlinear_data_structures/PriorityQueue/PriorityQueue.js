/*
 * TODO: 
 * - allow user to specify the backing heap type of the priority queue (min vs max)
 */

class PriorityQueue {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }
  
    add({data, priority}) {
        this.heap.push({data, priority});
        this.size++;
        this._bubbleUp();
    }

    addNewHighestPriority(data) {
        const previousMin = this.peek();
        const highestPriority = previousMin.priority - 1;
        this.add({data: data, priority: highestPriority});
    }
  
    popMin() {
        if (this.isEmpty()) {
            throw new Error('PriorityQueue is empty');
        }
        const min = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.size--;
        this.heap.pop();
        this._heapify();
        return min;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('PriorityQueue is empty');
        } 
        return this.heap[1];
    }

    printQueue() {
        console.log(this.heap);
    }
  
    _bubbleUp() {
        let currentIndex = this.size;
        while (currentIndex > 1 && this.heap[getParentIndex(currentIndex)].priority > this.heap[currentIndex].priority) {
            this._swap(currentIndex, getParentIndex(currentIndex));
            currentIndex = getParentIndex(currentIndex);
        }
    }
  
    _heapify() {
        let currentIndex = 1;
        let leftChildIndex = getLeftChildIndex(currentIndex);
        let rightChildIndex = getRightChildIndex(currentIndex);
        // Check that there is something to swap
        while (this._canSwap(currentIndex, leftChildIndex, rightChildIndex)){
            // Only compare left & right if they both exist
            if (this._exists(leftChildIndex) && this._exists(rightChildIndex)) {
                // Make sure to swap with the smaller of the two children
                if (this.heap[leftChildIndex].priority < this.heap[rightChildIndex].priority) {
                    this._swap(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                } else {
                    this._swap(currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
                }
            } else {
                // If only one child exist, always swap with the left
                this._swap(currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            }
            leftChildIndex = getLeftChildIndex(currentIndex);
            rightChildIndex = getRightChildIndex(currentIndex);
        }
    }

    isEmpty() {
        return this.size === 0;
    }
  
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
    _exists(index) {
        return index <= this.size;
    }
  
    _canSwap(current, leftChild, rightChild) {
        return (
            this._exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority
            || this._exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority
        );
    }
}
  
const getParentIndex = current => Math.floor((current / 2));
const getLeftChildIndex = current => current * 2;
const getRightChildIndex = current => current * 2 + 1;


module.exports = PriorityQueue;