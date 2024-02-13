/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        l=0
        r=words[i].length-1
        while(l<=r && words[i][l]== words[i][r]){
            l++
            r--
        }
        if(words[i][l]==words[i][r]) return words[i]
    }
    return ''
};