/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let num=[1]
  while(n>1){
    let temp=[]
    let pre=0
    let count =0
    for(let i=0;i<num.length;i++){
      if(num[i]==num[pre]) {
        count+=1
      }else{
        temp.push(count,num[pre])
        pre=i
        count=1
      }
      if(i == num.length-1){
        temp.push(count,num[i])
      }

    }
    num=temp
    n--
  }
  return num.join('')
};