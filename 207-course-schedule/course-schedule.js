/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    const map={}
    const visited={}

    for(let i=0;i<prerequisites.length;i++){
        if(!map[prerequisites[i][0]]) map[prerequisites[i][0]]=[]
        map[prerequisites[i][0]].push(prerequisites[i][1])
    }

    function dfs(node){
        if(visited[node]) return false
        if(map[node]!= undefined){
            if(map[node].length==0){
                return true
            }
            visited[node]=true
            for(let pre of map[node]){
                if(!dfs(pre)) return false
            }
            visited[node]=false
            map[node]=[]
        }
        return true
    }

    for(let course in map){
        if(!dfs(course)) return false
    }
    return true

};