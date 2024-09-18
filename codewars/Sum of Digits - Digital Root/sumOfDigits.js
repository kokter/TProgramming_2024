function sumOfDigits(n) {
  let str = n.toString();
  let result = 0;

  for (const char of str) {
    let num = parseInt(char);
    result += num;
  }

  str = result.toString();
  if (str.length >= "2") {
    return sumOfDigits(str);
  }

  return result;
}
