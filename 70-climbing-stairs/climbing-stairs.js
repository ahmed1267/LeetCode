/**
 * @param {number} n
 * @return {number}
 */
  let mem=[]
var climbStairs = function(n) {
  if(n<=2) return n
  if(mem[n]!=undefined)return mem[n]
  mem[n]=climbStairs(n-1)+climbStairs(n-2)
  return mem[n]

};