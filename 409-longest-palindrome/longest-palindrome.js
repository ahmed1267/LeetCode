/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length==1) return 1
    let map={}
    let res=0
    let odd=false
    for(let i =0;i<s.length;i++){
        if(!map[s[i]]) map[s[i]]=0
        map[s[i]]+=1
    }
    console.log(map)
    for(let char in map){
        if((map[char]%2)==0) res+=(map[char])
        else if(map[char]>2 && (map[char]%2)==1) {
            res+=(map[char])-1
            odd=true
        }
        else if(map[char]==1) odd=true
    }
    if(odd==true) res+=1
    if(Object.keys(map).length==1) res=map[s[0]]
    return res
};