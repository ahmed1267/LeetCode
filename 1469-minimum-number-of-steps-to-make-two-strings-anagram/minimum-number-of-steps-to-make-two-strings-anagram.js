/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let countS= new Array(26).fill(0)
    let countT= new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        countS[s.charCodeAt(i)-'a'.charCodeAt(0)]+=1
        countT[t.charCodeAt(i)-'a'.charCodeAt(0)]+=1
    }
    let count=0
    for(let i=0;i<26;i++){
        count+=Math.abs(countS[i]-countT[i])
    }
    return Math.floor(count/2)
};