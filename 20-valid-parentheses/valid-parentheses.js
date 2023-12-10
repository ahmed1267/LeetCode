/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=[]
    let counter={
        '(':")",
        '{':'}',
        '[':']'
    }
    if(s[0]==')'||s[0]==']'||s[0]=='}'|| s.length==1) return false
    for(let i=0;i<s.length;i++){
        if(!(s[i]==')'||s[i]==']'||s[i]=='}')){
            arr.push(s[i])
        }else if(counter[arr[arr.length-1]]==s[i]) arr.pop()
        else return false
    }
    return arr.length>0 ? false : true
};