/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let ones=0
    let zeros=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='0') zeros+=1
        else ones+=1
    }
    let res=[]
    for(let i=0;i<ones;i++){
        res[i]='1'
    }
    for(let i=ones-1;i<zeros+ones-1;i++){
        res[i]='0'
    }
    res[zeros+ones-1]='1'
    return res.join('')
};