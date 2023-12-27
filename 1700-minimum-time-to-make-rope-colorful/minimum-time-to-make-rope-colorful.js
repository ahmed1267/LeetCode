/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time=0
    let i=0
    colors=colors.split('')
    while(i<colors.length){
        if(colors[i]==colors[i-1]){
            if(neededTime[i]<neededTime[i-1]){
                time+=neededTime[i]
                neededTime.splice(i,1,neededTime[i-1])
            }else{
                time+=neededTime[i-1]
            }
        }
        i++
    }
    return time
};