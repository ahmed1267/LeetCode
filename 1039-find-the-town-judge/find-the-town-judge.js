/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(!trust.length){
        if(n==1)return 1
        return -1
    }
    let sus= new Map()
    
    for(let e of trust){
        if(!sus.has(e[1]))sus.set(e[1],[0,0])
        if(!sus.has(e[0]))sus.set(e[0],[0,0])
        tr=sus.get(e[1])
        tr[1]+=1
        te=sus.get(e[0])
        te[0]+=1
        sus.set(e[1],tr)
        sus.set(e[0],te)
    }
    for(let key of sus.keys()){
        if(sus.get(key)[0]==0 && sus.get(key)[1]==n-1) return key
    }
    return -1
};