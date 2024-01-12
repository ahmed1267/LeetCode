/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let l=0, r=s.length-1
    let count=0
    s=s.toLowerCase()
    while(r>l){
        if(s[l]== 'a' || s[l]== 'e' || s[l]== 'i' || s[l]== 'o' || s[l]== 'u' ){
            count+=1
        }
        if(s[r]== 'a' || s[r]== 'e' || s[r]== 'i' || s[r]== 'o' || s[r]== 'u' ){
            count-=1
        }
        l++
        r--
    }
    return count==0 ? true : false
};