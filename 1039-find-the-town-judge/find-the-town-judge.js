/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let truster= new Array(n+1).fill(0)
    let trustee= new Array(n+1).fill(0)
    for(let e of trust){
        truster[e[1]]+=1
        trustee[e[0]]+=1
    }
    for(let i=1;i<trustee.length;i++){
        if(trustee[i]==0 && truster[i]==n-1) return i
    }
    return -1
};