/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let res=[]
    gen(res,'',n,0,0)
    return res
};

const gen= function(res,curr,n,open,close){
    if(curr.length== 2*n){
        res.push(curr)
        return
    }
    if(open<n){
        gen(res,curr+'(',n,open+1,close)
    }
    if(close<open){
        gen(res,curr+')',n,open,close+1)
    }
}