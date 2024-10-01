function generatePermutations(input) {
    const results = [];

    function permute(arr, memo = '') {
        if (arr.length === 0) {
            results.push(memo);
        } else {
            const seen = new Set();
            for (let n = 0; n < arr.length; n++) {
                if (seen.has(arr[n])) continue;
                seen.add(arr[n]);
                const newArr = arr.slice(0, n).concat(arr.slice(n + 1));
                permute(newArr, memo + arr[n]);
            }
        }
    }

    permute(input.split(''));
    return results;
}

const input = "aabb";
const permutations = generatePermutations(input);

const formattedOutput = permutations.map(perm => `'${perm}'`);

console.log(`[${formattedOutput.join(', ')}]`);