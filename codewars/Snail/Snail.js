function snailTraversal(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    let result = [];
    let directions = ['right', 'down', 'left', 'up'];
    let directionIndex = 0;
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        if (directions[directionIndex] === 'right') {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
        } else if (directions[directionIndex] === 'down') {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
        } else if (directions[directionIndex] === 'left') {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        } else if (directions[directionIndex] === 'up') {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
        directionIndex = (directionIndex + 1) % 4;
    }
    return result;
}
let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(snailTraversal(array1));