function moveZeros(inputArray) {
    let nonZeroElements = [];
    let zeroElements = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            zeroElements.push(inputArray[i]);
        } else {
            nonZeroElements.push(inputArray[i]);
        }
    }

    return nonZeroElements.concat(zeroElements);
}

let result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result);