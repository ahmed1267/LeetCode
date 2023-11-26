/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l=0,r=l+1,max=0
    while(r<prices.length){
        if(prices[l]<prices[r]){
            max=Math.max(max,(prices[r]-prices[l]))
            
        }else {
            l=r
        }
        r+=1
    }
    return max
};