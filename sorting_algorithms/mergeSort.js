const mergeSort = (arr, log = false) => {
    if (!(arr instanceof Array)) {
        throw new Error('Expected array');
    }
    const length = arr.length;
    if (length === 1) {
        return arr;
    }
    const midpoint = Math.floor(length / 2);
    const leftArr = arr.slice(0, midpoint);
    const rightArr = arr.slice(midpoint);
    return merge(mergeSort(leftArr), mergeSort(rightArr), log);
}

const merge = (leftArr, rightArr, log) => {
    const sortedArr = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (log) {
            console.log(`left arr: [${leftArr}] \nright arr: [${rightArr}]`);
        }
        leftArr[0] < rightArr[0] ?
            sortedArr.push(leftArr.shift()) :
            sortedArr.push(rightArr.shift());
        if (log) {
            console.log(`merging: [${sortedArr}]\n`);
        }
    }
    return sortedArr.concat(leftArr).concat(rightArr);
}


module.exports = mergeSort;