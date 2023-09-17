/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let n=temperatures.length
    let res=new Array(n).fill(0)
    let st=[]
    for(let i=n-1;i>=0;i--){
        while(st.length&&temperatures[st[st.length-1]]<= temperatures[i]){
            st.pop()
        }
        if(st.length>0){
            res[i]=st[st.length-1]-i
        }
        st.push(i)
    }
    // for(let i=0;i<temperatures.length;i++){
    //     let j=i+1
    //     l=res.length
    //     while(j<temperatures.length){
    //         if(temperatures[j]>temperatures[i]) {
    //         res.push(j-i)
    //         break;
    //         }
    //         j++
    //     }
    //     if(res.length==l) res.push(0)
    // }    
    return res
};