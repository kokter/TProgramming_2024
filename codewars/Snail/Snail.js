function snail(array) {
  let res = [];
  let left = 0;
  let right = array[0].length - 1;
  let top = 0;
  let bottom = array.length - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(array[top][i]);
    }
    top += 1;
    for (let i = top; i <= bottom; i++) {
      res.push(array[i][right]);
    }
    right -= 1;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(array[bottom][i]);
      }
      bottom -= 1;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(array[i][left]);
      }
      left += 1;
    }
  }

  return res;
}
