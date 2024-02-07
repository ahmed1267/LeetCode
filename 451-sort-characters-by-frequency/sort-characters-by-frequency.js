/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map={}
    let res=''
    for(let i=0;i<s.length;i++){
        if(!map[s[i]])map[s[i]]=0
        map[s[i]]+=1
    }
    let sorted=Object.entries(map).sort((a,b)=> b[1]-a[1])
    for(let i=0;i<sorted.length;i++){
        
        res+=sorted[i][0].repeat(sorted[i][1])
        map[sorted[i][0]]-=1
        
    }

    return res
};