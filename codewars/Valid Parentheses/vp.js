function validParentheses(inputString) {
    let parenthesesArray = inputString.split("");
    let leftParenthesesCount = 0;
    let rightParenthesesCount = 0;

    for (let i = 0; i < parenthesesArray.length; i++) {
        if (parenthesesArray[i] === "(") {
            leftParenthesesCount++;
        } else {
            rightParenthesesCount++;
        }
    }

    return leftParenthesesCount === rightParenthesesCount;
}

let result = validParentheses("((())");
console.log(result);