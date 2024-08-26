/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let board = Array(n).fill().map((x) => Array(n).fill('.'))
    posDigs = new Set()
    negDigs = new Set()
    res = []
    cols = new Set()
    boardCopy = board
    function backtrack(row) {
        if (row == n) {
            sol = boardCopy.map((row) =>  row.join("") )
            res.push(sol)
            return
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || posDigs.has(row + col) || negDigs.has(row - col)) continue;
            cols.add(col)
            posDigs.add(row + col)
            negDigs.add(row - col)
            boardCopy[row][col] = 'Q'
            backtrack(row + 1)
            cols.delete(col)
            posDigs.delete(row + col)
            negDigs.delete(row - col)
            boardCopy[row][col] = '.'
        }
    }
    backtrack(0)
    return res

};
