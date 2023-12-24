/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    if(s.length==1) return 0
    let count=0, count1=0
    let s2=s.split('')
    let s1=s.split('')
    if(s1[0]=='1')s1[0]='0'
    else s1[0]='1'
    for(let i=1;i<s2.length;i++){
        if(s2[i]==s2[i-1] && s2[i]=='0') {
            count+=1
            s2[i]='1'
        }
        if(s2[i]==s2[i-1] && s2[i]=='1') {
            s2[i]='0'
            count+=1
        }
    }
        for(let i=1;i<s1.length;i++){
        if(s1[i]==s1[i-1] && s1[i]=='0') {
            count1+=1
            s1[i]='1'
        }
        if(s1[i]==s1[i-1] && s1[i]=='1') {
            s1[i]='0'
            count1+=1
        }
    }
    return Math.min(count,count1+1)
    
};