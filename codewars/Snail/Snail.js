function snail(array) {
    let listy = [];
    let left = 0;
    let right = array[0].length - 1;
    let upper = 0;
    let lower = array.length - 1;
    while (left <= right && upper <= lower) {
        for (let i = left; i <= right; i++) {
            listy.push(array[upper][i]);
        }
        upper += 1;
        for (let i = upper; i <= lower; i++) {
            listy.push(array[i][right]);
        }
        right -= 1;
        if (upper <= lower) {
            for (let i = right; i >= left; i--) {
                listy.push(array[lower][i]);
            }
            lower -= 1;
        }
        if (left <= right) {
            for (let i = lower; i >= upper; i--) {
                listy.push(array[i][left]);
            }
            left += 1;
        }
    }

    return listy;
}