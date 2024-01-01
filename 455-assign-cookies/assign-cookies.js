/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=> a-b)
    s.sort((a,b)=> a-b)
    let res=0
    for(let i=0;i<g.length;i++){
        for(let j=0;j<s.length;j++){
            if(g[i]<=s[j]){
                s[j]=0
                res+=1
                break;
            }
        }
    }
    return res
};