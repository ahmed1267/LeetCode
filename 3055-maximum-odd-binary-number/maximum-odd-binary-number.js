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
    let res=""
    res= res.padStart(ones-1,"1").padEnd(zeros+ones-1,"0").padEnd(zeros+ones,"1")
   return res
};