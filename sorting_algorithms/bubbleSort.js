const bubbleSort = (arr, log = false) => {
    if (!(arr instanceof Array)) {
        throw new Error('Expected array');
    }
    let swapping = true;
    while (swapping) {
        swapping = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                if (log) {
                    console.log(`Swapping pair ${arr[i]}, ${arr[i + 1]} in [${arr}]`);
                }
                swap(arr, i, i + 1);
                swapping = true;
            }
        }
    }
      return arr;
}

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

module.exports = bubbleSort;