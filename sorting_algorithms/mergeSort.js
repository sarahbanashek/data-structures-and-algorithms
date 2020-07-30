const mergeSort = arr => {
    const length = arr.length;
    if (length === 1) {
        console.log(arr);
        return arr;
    }
    const midpoint = Math.floor(length / 2);
    const leftArr = arr.slice(0, midpoint);
    const rightArr = arr.slice(midpoint);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
    const sortedArr = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        console.log(`left arr: [${leftArr}]     right arr: [${rightArr}]`)
        leftArr[0] < rightArr[0] ?
            sortedArr.push(leftArr.shift()) :
            sortedArr.push(rightArr.shift());
        console.log(`merging: [${sortedArr}]`);
    }
    return sortedArr.concat(leftArr).concat(rightArr);
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));


module.exports = mergeSort;