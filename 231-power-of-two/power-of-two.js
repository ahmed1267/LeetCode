/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   var divideByTwo = function(n){
       if(n>=2){
           n=n/2
       }else{
           return n
       }
       return divideByTwo(n)
   }
   const number = divideByTwo(n)
   if (n<=0) {
        return false
    } else if(Number.isInteger(number)) {
        return true
    }else{
        return false
    }
};