/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res=Array.from({length:n-1}, (_,index)=> index+1)
    let last= res.reduce((partial,a)=> partial+a,0)
    res.push(last*=-1)
    return res
};