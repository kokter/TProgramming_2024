function findMissing(arr) {
    for (let n = 0; n < arr.length - 1; n++) {
        let actualCharCode = arr[n].charCodeAt(0);
        let nextCharCode = arr[n + 1].charCodeAt(0);
        if (nextCharCode !== actualCharCode + 1) {
            return String.fromCharCode(actualCharCode + 1); 
        }
    }
    return null;
}

let arr = ["a", "b", "d"];
let result = findMissing(arr);
console.log(result);