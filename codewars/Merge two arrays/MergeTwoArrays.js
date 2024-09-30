function mergeArrays(a, b) {
    // your code here
    let left = 0;
    let right = 0;
    let res = [];
    while (left < a.length && right < b.length) {
        res.push(a[left]);
        left++;
        res.push(b[right]);
        right++;
    }
    while (left < a.length) {
        res.push(a[left]);
        left++;
    }
    while (right < b.length) {
        res.push(b[right]);
        right++;
    }
    return res;
}