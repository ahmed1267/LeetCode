/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let rightEdge=1
let leftEdge=0
let maxProfit=0
while(rightEdge!=prices.length){
    if(prices[leftEdge]<prices[rightEdge]){
        let profit=prices[rightEdge]-prices[leftEdge]
        maxProfit=profit>maxProfit? profit:maxProfit

    }else{
        leftEdge=rightEdge
    }
    rightEdge++
}
return maxProfit
};