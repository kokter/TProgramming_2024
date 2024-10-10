function toCamelCase(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "-" || inputString[i] === "_") {
            i++;
            result += inputString[i].toUpperCase();
        } else {
            result += inputString[i];
        }
    }
    return result;
}

let convertedWord = toCamelCase("the-stealth_warrior");
console.log(convertedWord);