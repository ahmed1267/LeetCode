/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let map = new Map()
    for(let i=0;i<matches.length;i++){
        if(!map.has(matches[i][0])) map.set(matches[i][0],0)
        if(!map.has(matches[i][1])) map.set(matches[i][1],0)
        map.set(matches[i][1], map.get(matches[i][1])+1)
    }
    let res=[[],[]]
    for(let con of map.entries()){
        if(con[1]==0) res[0].push(con[0])
        if(con[1]==1) res[1].push(con[0])
    }
    res[0].sort((a,b)=>a-b)
    res[1].sort((a,b)=>a-b)
    return res
};