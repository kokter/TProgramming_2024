function countElements(arr) {
    let totalCount = 0;

    function recursiveCount(subArray) {
        totalCount += subArray.length;
        for (let item of subArray) {
            if (Array.isArray(item)) {
                recursiveCount(item);
            }
        }
    }
    recursiveCount(arr);
    return totalCount;
}
let arr = [1, 2, [3, 4, [5]]];
let result = countElements(arr);
console.log(result);