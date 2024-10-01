function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  return digitalRoot(
    n
      .toString()
      .split("")
      .reduce((summ, digit) => summ + +digit, 0)
  );
}
