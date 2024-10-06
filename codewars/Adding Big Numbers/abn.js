function add(num1, num2) {
    while (num1.length < num2.length) num1 = '0' + num1;
    while (num2.length < num1.length) num2 = '0' + num2;

    let carryOver = 0;
    let sumResult = '';

    for (let i = num1.length - 1; i >= 0; i--) {
        let digitSum = parseInt(num1[i]) + parseInt(num2[i]) + carryOver;
        carryOver = Math.floor(digitSum / 10);
        sumResult = (digitSum % 10) + sumResult;
    }
    if (carryOver > 0) {
        sumResult = carryOver + sumResult;
    }

    return sumResult;
}

let finalResult = add("4634634634534", "657824234745");
console.log(finalResult);