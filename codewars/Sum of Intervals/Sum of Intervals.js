function calculateIntervalSum(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let totalLength = 0;
    let currentEnd = -Infinity;

    for (let interval of intervals) {
        if (interval[1] > currentEnd) {
            totalLength += interval[1] - Math.max(interval[0], currentEnd);
            currentEnd = interval[1];
        }
    }

    return totalLength;
}

let result = calculateIntervalSum([[1, 4], [7, 10], [3, 5]]);
console.log(result);