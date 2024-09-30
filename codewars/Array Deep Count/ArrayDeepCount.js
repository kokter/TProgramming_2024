function deepCount(a) {
  //...
  if (a.length === 0) {
    return 0;
  }
  let maxLength = 0;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      maxLength += deepCount(a[i]);
    }
    maxLength++;
  }
  return maxLength;
}
