function sumPairs(numbers, targetSum) {
    let seenNumbers = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let complement = targetSum - currentNumber;
        if (seenNumbers.has(complement)) {
            return [complement, currentNumber];
        }
        seenNumbers.set(currentNumber, i);
    }
    return undefined;
}

let result = sumPairs([11, 3, 7, 5], 10);
console.log(result);