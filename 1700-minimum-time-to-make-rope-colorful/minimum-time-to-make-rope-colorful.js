/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time=0
    let i=0, j=0
    while(i<neededTime.length){
        let currTime=0
        let currMax=0
        while(j<neededTime.length && colors[i]==colors[j]){
            currTime+= neededTime[j]
            currMax= Math.max(currMax, neededTime[j])
            j++
        }
        time+= currTime -  currMax
        i=j
    }

    return time
};