/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.split(' ')
    while(s[s.length-1]=='') s.pop()

    return s[s.length-1].length
};