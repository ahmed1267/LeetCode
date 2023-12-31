/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map=new Map()
    let max=-1
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])) map.set(s[i],i)
        else{
            max=Math.max(max,i-map.get(s[i])-1)
        }
    }
    return max
};