/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let l=0, r=s.length-1
    if(s[l]!=s[r]) return s.length
    while(l<r){
        let sL=l
        let sR=r
        while(s[l]==s[l+1])l++
        while(s[r]==s[r-1])r--
        if(s[l]!=s[r]){
            l=sL
            r=sR
            break;
        };
        l++
        r--
    }
    if(l==r ) return 1
    if(!(l<r)) return 0
    return s.substring(l,r+1).length
};