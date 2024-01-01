/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res=0
    if(s.length==0) return 0
    s.sort((a,b)=> a-b)
    g.sort((a,b)=> a-b)
    let cookieI=s.length-1
    let childI=g.length-1
    while(cookieI>=0 && childI>=0){
        if(s[cookieI]>=g[childI]){
            res+=1
            cookieI-=1
            childI-=1
        }else{
            childI-=1
        }
    }
    return res
};