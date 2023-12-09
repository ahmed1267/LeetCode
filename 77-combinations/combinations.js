/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res=[]
    var rec=(start,comb)=>{
        if(comb.length==k){
            res.push([...comb])
            return
        }
        for(let i=start;i<=n;i++){
            comb.push(i)
            rec(i+1,comb)
            comb.pop()
        }
    }
    rec(1,[])
    return res
    
};