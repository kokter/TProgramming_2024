function snail(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    let result = [];
    let topRow = 0, bottomRow = matrix.length - 1;
    let leftColumn = 0, rightColumn = matrix[0].length - 1;

    while (topRow <= bottomRow && leftColumn <= rightColumn) {
        for (let i = leftColumn; i <= rightColumn; i++) {
            result.push(matrix[topRow][i]);
        }
        topRow++;

        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightColumn]);
        }
        rightColumn--;

        if (topRow <= bottomRow) {
            for (let i = rightColumn; i >= leftColumn; i--) {
                result.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }

        if (leftColumn <= rightColumn) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(matrix[i][leftColumn]);
            }
            leftColumn++;
        }
    }

    return result;
}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(snail(matrix1));