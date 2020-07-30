class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    popMin() {
        if (this.size === 0) {
            return null;
        }
        console.log(`${this.heap[1]} is swapped with ${this.heap[this.size]}`)
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        console.log(`\nRemoved ${min}: [${this.heap}]`);
        this.heapify();
        console.log(`New heap: [${this.heap}]`);
        return min;
    }
    
    add(value) {
        this.heap.push(value);
        console.log(`\nAdding ${value}`);
        this.size++;
        this.bubbleUp();
        console.log(`New heap: [${this.heap}]`);
    }

    bubbleUp() {
        let currentIndex = this.size;
        let currentNum = this.heap[this.size];
        
        while (currentIndex > 1 && currentNum < this.heap[getParentIndex(currentIndex)]) {
            
            this.swap(currentIndex, getParentIndex(currentIndex));
            
            currentIndex = getParentIndex(currentIndex);
        }
    }

    heapify() {
        let currentIndex = 1;
        let leftChildIndex = getLeftChildIndex(currentIndex);
        let rightChildIndex = getRightChildIndex(currentIndex);

        while (this.canSwap(currentIndex, leftChildIndex, rightChildIndex)) {
            if (this.exists(leftChildIndex) && this.exists(rightChildIndex)){
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    this.swap(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                } else {
                    this.swap(currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
                }
            } else {
                this.swap(currentIndex, leftChildIndex);
                currentIndex = leftChildIndex;
            }

            leftChildIndex = getLeftChildIndex(currentIndex);
            rightChildIndex = getRightChildIndex(currentIndex);
        }
    }

    exists(index) {
        return index <= this.size;
    }

    canSwap(currentIndex, leftChildIndex, rightChildIndex) {
        return (
            this.exists(leftChildIndex) && this.heap[currentIndex] > this.heap[leftChildIndex]
            || this.exists(rightChildIndex) && this.heap[currentIndex] > this.heap[rightChildIndex]
        );
    }

    swap(x, y) {
        [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
    }
}

const getParentIndex = index => Math.floor(index / 2);
const getLeftChildIndex = index => index * 2;
const getRightChildIndex = index => index * 2 + 1;


const minHeap = new MinHeap();

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }


// populate minHeap with random numbers
for (let i=0; i < 6; i++) {
  minHeap.add(randomize());
}

// remove min
minHeap.popMin();