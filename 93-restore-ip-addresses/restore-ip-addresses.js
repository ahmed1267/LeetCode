/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
    let res=[]
    var valid=function(s){
        if(s>255||!s.length||s.length>=2&&s[0]=="0")return false
        return true 
    }

    var dfs= function(arr,s){

        if(arr.length==3){
            if(valid(s)) res.push([...arr,s])
            return
        }

        for(let i=1;i<4;i++){
            let sub=s.slice(0,i)
            if(!valid(sub)) continue;
            dfs([...arr,sub],s.slice(i))
        }

    }
    dfs([],s)
    return res.map((x)=>x.join('.'))
};