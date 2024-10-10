function duplicateEncode(inputWord) {
    let lowerCaseWord = inputWord.toLowerCase().split('');
    let encodedText = [];

    for (let i = 0; i < lowerCaseWord.length; i++) {
        let charCount = 0;
        for (let j = 0; j < lowerCaseWord.length; j++) {
            if (lowerCaseWord[i] === lowerCaseWord[j]) {
                charCount++;
            }
        }
        if (charCount > 1) {
            encodedText.push(")");
        } else {
            encodedText.push("(");
        }
    }

    return encodedText.join('');
}

let encodedResult = duplicateEncode("place");
console.log(encodedResult);