/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  if (parseInt(num.slice(-1)) % 2 == 1) return num;
  num=num.split('')
  for(let i=num.length-1;i>=0;i--){
    if(!(parseInt(num[i])%2==1)){
      num.pop()
    }else{
      break;
    }
  }
  return num.join('')
};