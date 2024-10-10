function sumPairs(ints, s) {
    let seen = new Set();

    for (let i = 0; i < ints.length; i++) {
        let current = ints[i];
        let needed = s - current;
        if (seen.has(needed)) {
            return [ints[ints.indexOf(needed)], ints[i]];
        }
        seen.add(current);
    }
    return undefined;
}