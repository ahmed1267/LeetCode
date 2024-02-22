/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(!trust.length && n==1) return n
    else if(!trust.length) return -1
    let set=new Set([...Array(n).keys()].map(i => i + 1))
   
    for(let i=0;i<trust.length;i++){
        if(set.has(trust[i][0])) set.delete(trust[i][0])
    }
    let setItr=set.keys()
    set=new Set([...Array(n).keys()].map(i => i + 1))
    for(let e of setItr){
        let c=0
        for(let i=0;i<trust.length;i++){
            if(trust[i][1]==e )c+=1
            if(c==(n-1)) return e
        }
    }
     return -1
};