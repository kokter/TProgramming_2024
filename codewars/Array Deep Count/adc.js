function deepCount(array) {
    let totalCount = 0;
    for (let i = 0; i < array.length; i++) {
        let result = checkAndCount(array[i]);
        totalCount += result;
    }
    return totalCount;
}

let inputArray = [1, 2, 3];
let finalResult = deepCount(inputArray);
console.log(finalResult);

function checkAndCount(element) {
    if (Array.isArray(element)) {
        console.log("yes");
        let count = deepCount(element);
        return count + 1;
    } else {
        console.log("no");
        return 1;
    }
}