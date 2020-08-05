class MinHeap {
    constructor(logger = null) {
        this.heap = [null];
        this.size = 0;
        this.logger = logger;
    }

    add(value) {
        this.heap.push(value);
        if(this.logger !== null) {
            this.logger.log(`Adding ${value}`);
        }
        this.size++;
        this._bubbleUp();
        if(this.logger !== null) {
            this.logger.log(`New heap: [${this.heap}]`);
        }
    }

    popMin() {
        if (this.size === 0) {
            return null;
        }
        if(this.logger !== null) {
            this.logger.log(`${this.heap[1]} is swapped with ${this.heap[this.size]}`);
        }
        this._swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        if(this.logger !== null) {
            this.logger.log(`Removed ${min}: [${this.heap}]`);
        }
        this._heapify();
        if(this.logger !== null) {
            this.logger.log(`New heap: [${this.heap}]`);
        }
        return min;
    }
    
    printHeap() {
        console.log(this.heap);
    }

    _bubbleUp() {
        let currentIndex = this.size;
        let currentNum = this.heap[this.size];
        
        while (currentIndex > 1 && currentNum < this.heap[getParentIndex(currentIndex)]) {
            
            this._swap(currentIndex, getParentIndex(currentIndex));
            
            currentIndex = getParentIndex(currentIndex);
        }
    }

    _heapify() {
        let currentIndex = 1;
        let leftChildIndex = getLeftChildIndex(currentIndex);
        let rightChildIndex = getRightChildIndex(currentIndex);

        while (this._canSwap(currentIndex, leftChildIndex, rightChildIndex)) {
            if (this._exists(leftChildIndex) && this._exists(rightChildIndex)){
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    this._swap(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                } else {
                    this._swap(currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
                }
            } else {
                this._swap(currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            }

            leftChildIndex = getLeftChildIndex(currentIndex);
            rightChildIndex = getRightChildIndex(currentIndex);
        }
    }

    _exists(index) {
        return index <= this.size;
    }

    _canSwap(currentIndex, leftChildIndex, rightChildIndex) {
        return (
            this._exists(leftChildIndex) && this.heap[currentIndex] > this.heap[leftChildIndex]
            || this._exists(rightChildIndex) && this.heap[currentIndex] > this.heap[rightChildIndex]
        );
    }

    _swap(x, y) {
        [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
    }
}

const getParentIndex = index => Math.floor(index / 2);
const getLeftChildIndex = index => index * 2;
const getRightChildIndex = index => index * 2 + 1;


const minHeap = new MinHeap(console);

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }


// populate minHeap with random numbers
for (let i=0; i < 6; i++) {
  minHeap.add(randomize());
}

minHeap.printHeap();

// remove min
minHeap.popMin();

minHeap.printHeap();