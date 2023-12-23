/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let set = new Set()
    point=[0,0]
    for(let i=0;i<path.length;i++){
        if(path[i]=='N') point[0]+=1
        if(path[i]=='S') point[0]-=1
        if(path[i]=='E') point[1]+=1
        if(path[i]=='W') point[1]-=1
        key=`${point[0]},${point[1]}`
        if(set.has(key) || key== '0,0') return true
        else set.add(key)
    }

    return false
    
};