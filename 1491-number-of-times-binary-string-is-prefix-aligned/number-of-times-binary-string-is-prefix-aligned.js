/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function(flips) {
    let count= max = result =0

    for(let flip of flips){
        max=Math.max(max,flip)
        count+=1
        if(max== count) result+=1
    }
    return result
};
