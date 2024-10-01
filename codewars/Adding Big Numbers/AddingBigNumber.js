function add(a, b) {
  let carry = 0;
  let result = "";
  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    result = carry + result;
  }

  return result;
}
