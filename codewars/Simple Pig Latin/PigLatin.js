function pigIt(str) {
    str = str.split(" ");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let str1 = "";
        if (str[i] === "!" || str[i] === "?") {
            str1 = str[i].split("").slice(1).concat(str[i][0]);
        } else {
            str1 = str[i].split("").slice(1).concat(str[i][0], "ay");
        }
        arr.push(str1.join(""));
    }
    return arr.join(" ");
}