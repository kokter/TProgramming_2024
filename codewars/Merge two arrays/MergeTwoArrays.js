function mergeArrays(a, b) {
    let left = 0;
    let right = 0;
    let listy = [];
    while (left < a.length && right < b.length) {
        listy.push(a[left]);
        left++;
        listy.push(b[right]);
        right++;
    }
    while (left < a.length) {
        listy.push(a[left]);
        left++;
    }
    while (right < b.length) {
        listy.push(b[right]);
        right++;
    }
    return listy;
}