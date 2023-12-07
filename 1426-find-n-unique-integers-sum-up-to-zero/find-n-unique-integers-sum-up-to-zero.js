/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let res=[]
  let sum=0
  for(let i=0;i<n-1;i++){
    res.push(i+1)
    sum+=i+1
  }
  res.push(-sum)
  return res
};