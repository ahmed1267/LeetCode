/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp =  new Array(n+1).fill(Infinity)
    dp[0]=0
    for(let i=1; i<= n; ++i){
        let min= Infinity
    for(let j=1; (j*j)<=i; ++j){
        min= Math.min(min, dp[i-(j*j)]+1)
    }
    dp[i]= min
    }
     return dp[n]
};