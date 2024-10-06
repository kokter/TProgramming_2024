function sumDigits(digitsArray) {
    let sum = 0;
    for (let i = 0; i < digitsArray.length; i++) {
        sum += Number(digitsArray[i]);
    }
    return sum;
}

function digitalRoot(number) {
    let digitsArray = number.toString().split('');

    while (digitsArray.length !== 1) {
        let intermediateResult = sumDigits(digitsArray);
        digitsArray = intermediateResult.toString().split('');
    }

    return Number(digitsArray[0]);
}

let result = digitalRoot(492);
console.log(result);