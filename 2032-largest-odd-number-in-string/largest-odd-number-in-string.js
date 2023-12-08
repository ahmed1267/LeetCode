/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  if (parseInt(num.slice(-1)) % 2 == 1) return num;
  for(let i=num.length-1;i>=0;i--){
    n=parseInt(num[i])
    if((n%2)==1){
     return num.slice(0,i+1)
    }
  }
  return ""

};