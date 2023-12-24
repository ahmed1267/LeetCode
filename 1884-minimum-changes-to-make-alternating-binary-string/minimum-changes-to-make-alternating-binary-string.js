/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    if(s.length==1) return 0
    let pre=s[0]
    let count1=count(s,pre)
    let count2= count(s,pre=='0'? '1' : '0')+1
    return Math.min(count2,count1)
    
};

function count(s,pre){
    let count=0
    for(let i=1;i<s.length;i++){
        if(s[i]==pre){
            count+=1
            pre= pre == '0'? '1' : '0'
        }else{
            pre=s[i]
        }
    }
    return count
}