function mergeArrays(array1, array2) {
    let mergedArray = [];
    let maxLength = Math.max(array1.length, array2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < array1.length) {
            mergedArray.push(array1[i]);
        }
        if (i < array2.length) {
            mergedArray.push(array2[i]);
        }
    }

    return mergedArray;
}

let result = mergeArrays(["a", "b", "c", "d", "e", "f"], [1, 2, 3]);
console.log(result);