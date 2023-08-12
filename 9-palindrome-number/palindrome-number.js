/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let left =0
    let right=Array.from(String(x),Number).length-1
    x=Array.from(String(x),Number)
    while(right>left) {
        if(x[left]!=x[right]) return false;
        left+=1
        right-=1
    }
    return true
};