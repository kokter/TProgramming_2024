function moveZeros(arr) {
  const zero = [];
  const arr_2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? zero.push(arr[i]) : arr_2.push(arr[i]);
  }

  for (let j = 0; j < zero.length; j++) {
    arr_2.push(zero[j]);
  }

  return arr_2;
}
