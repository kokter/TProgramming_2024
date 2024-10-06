function findMissingLetter(charArray) {
    for (let i = 0; i < charArray.length - 1; i++) {
        let currentCharCode = charArray[i].charCodeAt(0);
        let nextCharCode = charArray[i + 1].charCodeAt(0);

        if (nextCharCode !== currentCharCode + 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return null; // Return null if no missing letter is found
}

let inputArray = ["a", "b", "d"];
let missingLetter = findMissingLetter(inputArray);
console.log(missingLetter);