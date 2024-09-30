function findSumPairs(arr, target) {
    const seen = new Set();

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }

    return undefined;
}
let result = findSumPairs([10, 5, 2, 3, 7, 5], 10);
console.log(result);