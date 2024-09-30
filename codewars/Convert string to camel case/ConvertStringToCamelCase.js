function toCamelCase(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      str.splice(i, 2, str[i + 1].toUpperCase());
    } else {
      continue;
    }
  }
  return str.join("");
}
