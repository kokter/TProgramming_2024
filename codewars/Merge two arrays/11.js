function mergeArrays(arr1, arr2) {
    let combined = [];
    let maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combined.push(arr1[i]);
        }
        if (i < arr2.length) {
            combined.push(arr2[i]);
        }
    }

    return combined;
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])); 

console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f'])); 