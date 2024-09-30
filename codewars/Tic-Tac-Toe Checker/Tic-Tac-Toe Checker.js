function isSolved(board) {
    const checkLine = line => new Set(line).size === 1 && line[0] !== 0;

    for (let i = 0; i < 3; i++) {
        if (checkLine(board[i])) return board[i][0];
        if (checkLine([board[0][i], board[1][i], board[2][i]])) return board[0][i]; 
    }
    const diag1 = [board[0][0], board[1][1], board[2][2]];
    const diag2 = [board[0][2], board[1][1], board[2][0]];
    if (checkLine(diag1)) return diag1[0];
    if (checkLine(diag2)) return diag2[0];
    return board.flat().includes(0) ? -1 : 0;
}
let board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
];
console.log(isSolved(board));