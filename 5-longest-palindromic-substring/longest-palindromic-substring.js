/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s==1) return s
    let res=""
    let maxL=0
    for(i=0;i<s.length;i++){
        l=i
        r=i
        while(l>=0 && r<s.length && s[l]==s[r]){
            if(maxL<r-l+1){
                maxL=r-l+1
                res=s.slice(l,r+1)
            }
            l--
            r++
        }
        l=i
        r=i+1
        while(l>=0 && r<s.length && s[l]==s[r]){
            if(maxL<r-l+1){
                maxL=r-l+1
                res=s.slice(l,r+1)
            }
            l--
            r++
        }


    }
    return res
};