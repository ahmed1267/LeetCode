/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let m=matrix.length
    let n=matrix[0].length
    let max=0
    let dp={}
    let val=-1
    var dfs= function(x,y,val){
        if(x<0||x>=m||y<0||y>=n||matrix[x][y]<=val) return 0
        if(dp[`${x}~${y}`]!= undefined) return dp[`${x}~${y}`]
        let down=dfs(x+1,y,matrix[x][y])+1
        let up=dfs(x-1,y,matrix[x][y])+1
        let right=dfs(x,y+1,matrix[x][y])+1
        let left=dfs(x,y-1,matrix[x][y])+1
        dp[`${x}~${y}`]=Math.max(up,down,left,right)
        return dp[`${x}~${y}`]
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(dp[`${i}~${j}`]!= undefined) continue;
            max=Math.max(dfs(i,j,val),max)
        }
    }
    return max
};