function duplCode(word) {
    let smashword = word.toLowerCase().split('');
    let convertedtext = [];

    for (let n = 0; n < smashword.length; n++) {
        let compute = 0;
        for (let f = 0; f < smashword.length; f++) {
            if (smashword[n] === smashword[f]) {
                compute++;
            }
        }
        if (compute > 1) {
            convertedtext.push(")");
        } else {
            convertedtext.push("(");
        }
    }
    return convertedtext.join('');
}

let result = duplCode("Success");
console.log(result);