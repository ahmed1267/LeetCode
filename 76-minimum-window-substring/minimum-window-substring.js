/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length<t.length||!s||!t) return ""
    if(s===t) return s
    let left=0 ,right=0
    let req=0
    let minIndex=s.length+1
    let minLength=s.length+1
    let map={}
    for(let character of t) map[character]=(map[character]||0)+1
    while(right<s.length){
        if(map[s[right]]-->=1) req+=1
        right++
        while(req==t.length){
            if(right-left<minLength){
                minLength=right-left
                minIndex=left
            }
            if(map[s[left]]++>=0) req--
            left++
        }
    }
    return s.slice(minIndex,minIndex+minLength)
};