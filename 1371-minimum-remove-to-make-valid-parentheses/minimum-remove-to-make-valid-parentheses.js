/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack=[]
    let str=s.split('')
    for(let i=0;i<str.length;i++){
        if(str[i]=='('){
            stack.push(i)
        }else if(str[i]== ')'){
            if(stack.length>0){
                stack.pop()
            }else{
                str[i]=''
            }
        }
    }
    while(stack.length>0){
        str[stack.pop()]=''
    }
    return str.filter(char => char != '').join('')
};