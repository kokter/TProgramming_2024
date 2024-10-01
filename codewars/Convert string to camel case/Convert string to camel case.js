function CamelCase(str) {
    let result = '';
    let shouldCapitalize = false;

    for (let n = 0; n < str.length; n++) {
        if (str[n] === '-' || str[n] === '_') {
            shouldCapitalize = true;
        } else {
            result += shouldCapitalize ? str[n].toUpperCase() : str[n];
            shouldCapitalize = false;
        }
    }
    return result;
}
const guessWord = CamelCase("the-stealth_warrior");
console.log(guessWord);