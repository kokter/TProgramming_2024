function moveZero(arr) {
    let nonZeroIndex = 0;

    for (let n = 0; n < arr.length; n++) {
        if (arr[n] !== 0) { 
            arr[nonZeroIndex] = arr[n];
            nonZeroIndex++;
        }
    }

    for (let n = nonZeroIndex; n < arr.length; n++) {
        arr[n] = 0;
    }

    return arr;
}

result = moveZero([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result); 