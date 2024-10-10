function pigIt(inputString) {
    let endSymbol = "";
    let resultArray = [];
    let wordsArray = inputString.split(' ');
    let specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    for (let i = 0; i < wordsArray.length; i++) {
        if (specialCharsRegex.test(wordsArray[i])) {
            endSymbol = wordsArray[i];
        } else {
            let currentWord = wordsArray[i];
            let tempArray = currentWord.split('');
            tempArray.push(tempArray.shift());
            tempArray.push("ay");
            let newWord = tempArray.join('');
            resultArray.push(newWord);
        }
    }

    if (endSymbol) {
        resultArray.push(endSymbol);
    }

    resultArray = resultArray.join(' ');
    return resultArray.trim();
}

let result = pigIt("Pig latin is cool !");
console.log(result);