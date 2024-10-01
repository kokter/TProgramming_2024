function mergeArrays(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);

    for (let n = 0; n < maxLength; n++) {
        if (n < arr1.length) result.push(arr1[n]);
        if (n < arr2.length) result.push(arr2[n]);
    }
    return result;
}
let result = mergeArrays(["a", "b", "c", "d", "e", "f"], [1, 2, 3]);
console.log(result);