function addBigNumbers(num1, num2) {
    let carry = 0;
    let result = '';
    let maxLength = Math.max(num1.length, num2.length);

    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}
let num1 = "12345678901234567890";
let num2 = "98765432109876543210";
let sum = addBigNumbers(num1, num2);
console.log(sum);