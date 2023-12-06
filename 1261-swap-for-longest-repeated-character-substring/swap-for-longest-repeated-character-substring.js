/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    const groups = Array.from(Array(26), ()=> [])
    for(let i=0;i<text.length;i++){
        groups[text.charCodeAt(i)-97].push(i)
    }
    let res=0
    groups.forEach(group => {
        let cur=1 ,pre=0 ,sum=0
        for(let i=1; i<group.length;i++){
            if(group[i]== group[i-1]+1) cur+=1
            else{
                pre = group[i]== group[i-1]+2? cur : 0
                cur=1
            }
            sum=Math.max(sum,pre+cur)
        }
        res= Math.max(res, sum+(sum<group.length? 1: 0))
    })
    return res
};