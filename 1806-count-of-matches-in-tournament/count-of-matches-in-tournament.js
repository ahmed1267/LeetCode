/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches=0

    function rec(n){
        if(n==1) return 0
        if(n%2==1) return (n-1)/2 + rec(((n-1)/2)+1)
        else return n/2 + rec(n/2)
    }
    return rec(n)
    
};