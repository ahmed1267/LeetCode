/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    let res = Infinity;
    const dp = {};

    const dfs = (i, j) => {
        const key = [i,j].join();
        if(key in dp) return dp[key];
        if(i === n) return 0;
        if(j >= n || j < 0) return Infinity;
        const res = matrix[i][j] + Math.min(dfs(i+1, j), dfs(i+1, j-1), 
                        dfs(i+1, j+1));
        dp[key] = res;
        return res;
    }

    for(let i = 0; i < n; i++) {
        res = Math.min(res, dfs(0, i));
    }

    return res;
};