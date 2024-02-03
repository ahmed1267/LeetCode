/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length
    const K = k+1
    const dp = Array(K).fill(0)

    for(let i= n-1; i>=0; i--){
        let currMax=0
        let end = Math.min(n,i+k)

        for(let j=i; j<end; j++){
            currMax= Math.max(currMax, arr[j])
            dp[i%K] = Math.max(dp[i%K], dp[(j+1)% K] + currMax * (j-i+1))
        }
    }
    return dp[0]
};