/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  if(n==1) return [0]
  let res=[]
  let odd=false
    if(n%2==1){ 
      n=n-1
      odd=true
    }
    else {n=n}
    for(let i=0;i<n/2;i++){
      res.push(i+1,-(i+1))
    }
    if(odd==true) res.push(0)
    return res
};