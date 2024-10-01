function pigIt(str) {
  //Code here
  str = str.split(" ");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let newStr = "";
    if (str[i] === "!" || str[i] === "?") {
      newStr = str[i].split("").slice(1).concat(str[i][0]);
    } else {
      newStr = str[i].split("").slice(1).concat(str[i][0], "ay");
    }
    arr.push(newStr.join(""));
  }
  return arr.join(" ");
}
