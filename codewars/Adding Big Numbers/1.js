function add(num1, num2) {
    let carry = 0;
    let result = [];
    
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
    
    num2 = num2.padStart(num1.length, '0');
    
    for (let i = num1.length - 1; i >= 0; i--) {
        let digitSum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(digitSum / 10);
        result.push(digitSum % 10);
    }
    
    if (carry) {
        result.push(carry);
    }
    
    result.reverse();
    
    return result.join('');
}

console.log(add("123", "321"));  
console.log(add("11", "99"));    