function anagramDifference(w1, w2) {
    let freq1 = {};
    let freq2 = {};
    let res = 0;
    for (let char of w1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for (let char of w2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }
    for (let char in freq1) {
        if (freq2[char]) {
            res += Math.abs(freq1[char] - freq2[char]);
        } else {
            res += freq1[char];
        }
    }
    for (let char in freq2) {
        if (!freq1[char]) {
            res += freq2[char];
        }
    }
    return res;
}