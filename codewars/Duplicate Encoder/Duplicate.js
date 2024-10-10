function duplicateEncode(word) {
    let scheme = new Map();
    let arr = word.toLowerCase().split("");
    for (let item of arr) {
        if (scheme.has(item)) {
            scheme.set(item, scheme.get(item) + 1);
        } else {
            scheme.set(item, 1);
        }
    }
    let listy = [];
    for (let i = 0; i < arr.length; i++) {
        if (scheme.get(arr[i]) > 1) {
            listy.push(")");
        } else {
            listy.push("(");
        }
    }
    return listy.join("");
}