function solveNQueens(n) {
  let solutions = [];
  let board = new Array(n).fill(0).map(() => new Array(n).fill("."));

  function isValid(board, row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    // Check diagonal \
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    // Check diagonal /
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function solve(board, row) {
    if (row === n) {
      let solution = board.map((row) => row.join(""));
      solutions.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board[row][col] = "Q";
        solve(board, row + 1);
        board[row][col] = "."; // backtrack
      }
    }
  }

  solve(board, 0);
  return solutions;
}

let solutions = solveNQueens(4);
console.log(solutions);
