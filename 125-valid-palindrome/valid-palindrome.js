/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.match(/[A-Za-z0-9]+/g)
    if(s) s=s.join('').toLowerCase()
    else return true
    let l=0,r=s.length-1
    while(l<r){
        if(s[l]!=s[r]) return false
        l+=1
        r-=1
    }
    return true
};