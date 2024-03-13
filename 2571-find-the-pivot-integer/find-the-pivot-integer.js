/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
   for(let i=1; i<=n;i++){
    let left=(i*(i+1))/2
    let right =(n*(n+1))/2-(i*(i-1))/2
    if(left == right) return i
   }
   return -1
};