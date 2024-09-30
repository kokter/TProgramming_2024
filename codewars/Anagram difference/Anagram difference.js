function countCharacters(word) {
    const charCount = {};
    for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

function anagramDifference(word1, word2) {
    const charCount1 = countCharacters(word1);
    const charCount2 = countCharacters(word2);
    let totalDifference = 0;

    for (let char in charCount1) {
        if (charCount2[char]) {
            totalDifference += Math.abs(charCount1[char] - charCount2[char]);
        } else {
            totalDifference += charCount1[char];
        }
    }
    for (let char in charCount2) {
        if (!charCount1[char]) {
            totalDifference += charCount2[char];
        }
    }
    return totalDifference;
}

let result = anagramDifference("codewars", "hackerrank");
console.log(result);