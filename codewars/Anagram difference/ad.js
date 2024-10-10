function anagramDifference(word1, word2) {
    let array1 = word1.split("");
    let array2 = word2.split("");
    let repeatedChars = [];
    
    for (let i = 0; i < array1.length; i++) {
        let resultChar = findRepeat(array1[i], array2);
        if (resultChar !== null) {
            repeatedChars.push(resultChar);
            array1.splice(i, 1); 
            i--; 
        }
    }
    
    let finalResult = (array1.length + array2.length);
    return finalResult;
}

let result = anagramDifference("codewars", "hackerrank");
console.log(result);

function findRepeat(char, array) {
    for (let j = 0; j < array.length; j++) {
        if (char === array[j]) {
            array.splice(j, 1);
            return char;
        }
    }
    return null;
}
