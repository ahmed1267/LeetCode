/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let char of tokens){
        let c = char.charAt(0)
        if(c== "+"){
            let b= stack.pop()
            let a= stack.pop()
            stack.push(a+b)
        }else if(c== "-" && char.length === 1){
            let b= stack.pop()
            let a= stack.pop()
            stack.push(a-b)
        }else if(c== "*"){
            let b= stack.pop()
            let a= stack.pop()
            stack.push(a*b)
        }else if(c== "/"){
            let b= stack.pop()
            let a= stack.pop()
            stack.push((a/b) | 0)
        }else stack.push(parseInt(char))
    }
    return stack[0]
};