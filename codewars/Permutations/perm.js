function permutations(inputString) {
    if (inputString.length <= 1) {
        return [inputString];
    }

    const uniquePermutations = new Set();

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];
        const remainingChars = inputString.slice(0, i) + inputString.slice(i + 1);
        const remainingPermutations = permutations(remainingChars);

        for (const permutation of remainingPermutations) {
            uniquePermutations.add(currentChar + permutation);
        }
    }

    return Array.from(uniquePermutations);
}

const input = "aabb";
const permutationsList = permutations(input);

const formattedOutput = permutationsList.map(permutation => `'${permutation}'`);

console.log(`[${formattedOutput.join(', ')}]`);