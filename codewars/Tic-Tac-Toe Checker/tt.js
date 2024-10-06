function isSolved(gameBoard) {
    function allEqual(array) {
        return array.every(value => value === array[0] && value !== 0);
    }

    for (let row of gameBoard) {
        if (allEqual(row)) {
            return row[0];
        }
    }

    for (let col = 0; col < 3; col++) {
        let column = [gameBoard[0][col], gameBoard[1][col], gameBoard[2][col]];
        if (allEqual(column)) {
            return column[0];
        }
    }

    let diagonal1 = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
    let diagonal2 = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];
    if (allEqual(diagonal1)) {
        return diagonal1[0];
    }
    if (allEqual(diagonal2)) {
        return diagonal2[0];
    }

    for (let row of gameBoard) {
        if (row.includes(0)) {
            return -1;
        }
    }

    return 0;
}

let gameBoard = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
];

console.log(isSolved(gameBoard));