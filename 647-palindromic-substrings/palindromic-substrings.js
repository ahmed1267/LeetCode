/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   
   let res=0
   for(let i=0;i<s.length;i++){
       res+= rec(s,i,i)
       res+= rec(s,i,i+1)
   }

   return res
};

function rec (s,left,right){
    let count=0
    while(left >= 0 && right<s.length && s[left]== s[right]){
        count+=1
        left--
        right++
    }
    return count
}