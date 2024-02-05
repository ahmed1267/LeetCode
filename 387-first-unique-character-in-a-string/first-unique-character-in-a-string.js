/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map ={}
    for(let i=0;i<s.length;i++){
        if(!map[s[i]])map[s[i]]=[i]
        if(map[s[i]].length!=2) map[s[i]].push(1)
        else map[s[i]][1]+=1
        
    }
    for(let char in map){
        if(map[char][1]==1) return map[char][0]
    }
    return -1
};