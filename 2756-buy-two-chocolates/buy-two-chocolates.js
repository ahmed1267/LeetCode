/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let curr=money
    let min=-1
    let l=0,r=1
    while(r<prices.length){
        if(prices[l]<money){
            curr-=prices[l]
            while(r<prices.length){
                if(prices[r]<=curr){
                    curr-=prices[r]
                    min=Math.max(min,curr)
                    curr+=prices[r]
                }
                r+=1
            }
        }
        curr=money
        l+=1
        r=l+1
    }
    return min>=0? min : money
};