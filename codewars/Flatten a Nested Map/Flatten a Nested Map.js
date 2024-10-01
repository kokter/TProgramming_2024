function uniquePermutations(str) {
    const result = new Set();

    function permute(chars, prefix = '') {
        if (chars.length === 0) {
            result.add(prefix);
        } else {
            for (let n = 0; n < chars.length; n++) {
                const remainingChars = chars.slice(0, n) + chars.slice(n + 1);
                permute(remainingChars, prefix + chars[n]);
            }
        }
    }

    permute(str);
    return Array.from(result);
}

const input = "aabb";
const permutations = uniquePermutations(input);
const formattedOutput = permutations.map(perm => `${perm}`);

console.log(formattedOutput);