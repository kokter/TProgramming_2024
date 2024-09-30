def is_solved(board):
    winning_cond = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ]
    
    for condition in winning_cond:
        if condition[0] == condition[1] == condition[2] and condition[0] != 0:
            return condition[0]  
    
    for row in board:
        if 0 in row:
            return -1  
    
    return 0

print(is_solved([[0, 0, 1],
                  [0, 1, 2],
                  [2, 1, 0]]))  

print(is_solved([[1, 0, 2],
                  [1, 2, 2],
                  [1, 0, 0]]))  

print(is_solved([[1, 2, 1],
                  [2, 1, 2],
                  [2, 1, 1]]))  

print(is_solved([[1, 2, 2],
                  [2, 1, 1],
                  [1, 1, 2]]))  