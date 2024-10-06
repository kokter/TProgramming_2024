function sortString(inputString) {
    return inputString.split('').sort().join('');
}

function anagrams(targetWord, wordList) {
    let anagramList = [];
    let sortedTargetWord = sortString(targetWord);

    for (let i = 0; i < wordList.length; i++) {
        if (sortString(wordList[i]) === sortedTargetWord) {
            anagramList.push(wordList[i]);
        }
    }
    return anagramList;
}

let result = anagrams('laser', ['lazing', 'lazy',  'lacer']);
console.log(result);