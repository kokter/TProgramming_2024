function duplicateEncode(word) {
    let map = new Map();
    let arr = word.toLowerCase().split("");
    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) > 1) {
            res.push(")");
        } else {
            res.push("(");
        }
    }
    return res.join("");
}