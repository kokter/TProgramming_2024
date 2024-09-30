function sumDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

function digitalRoot(num) {
    while (num >= 10) {
        num = sumDigits(num);
    }
    return num;
}

let result = digitalRoot(132189);
console.log(result);