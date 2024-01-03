/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let m=bank[0].length , n=bank.length
  let map=new Array(n).fill(0)
  let res=0
  for(let i=0;i<n;i++){
      for(let j=0; j<m;j++){
          if(bank[i][j]==1) map[i]+=1
      }
  }  
    let l=0, r=1
    while(r<n && l<n){
        if(map[l]==0){
            l+=1
            r=l+1
            continue;
        }
        if(map[r]==0){
            r+=1
            continue;
        }
        res+=map[l]*map[r]
        l=r
        r+=1
    }
    return res
};