function moveZeros(arr) {
    let count = 0;
    let listy = [];
    for (let item of arr) {
        if (item === 0) {
            count += 1;
        } else {
            listy.push(item);
        }
    }
    for (let i = 0; i < count; i++) {
        listy.push(0);
    }
    return listy;
}