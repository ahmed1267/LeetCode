/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length>haystack.length) return -1
    if(needle.length==1 && haystack.length==1 &&needle[0]==haystack[0]) return 0
    let l=0,r=0
    while(r<haystack.length){
        if(needle[0]==haystack[l]){  
          for(let i=0;i<needle.length;i++){
              if(needle[i]==haystack[r]){
                  r+=1
                  if(i==needle.length-1) return l
              }else{
                  break;
              }
          }

        }
        l+=1
        r=l
    }
    return -1

};