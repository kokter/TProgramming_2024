function moveZeros(arr) {
  let counter = 0;
  let newArr = [];
  for (let item of arr) {
    if (item === 0) {
      counter += 1;
    } else {
      newArr.push(item);
    }
  }
  for (let i = 0; i < counter; i++) {
    newArr.push(0);
  }
  return newArr;
}
