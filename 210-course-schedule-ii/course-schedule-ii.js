/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var dfs= function(i,visited,res,graph){
    visited[i]=true
    let edges=graph.get(i)
    if(edges){

    for(let edge of edges){
        if(visited[edge]==true) return true
        if(visited[edge]==false && dfs(edge,visited,res,graph)) return true
        
        }
    }
    visited[i]=2
    res.unshift(i)
    return false
}
var findOrder = function(numCourses, prerequisites) {
    //Constrcuting Graph
    let graph= new Map()
    for(let [e,v] of prerequisites){
        if(graph.has(v)) graph.get(v).push(e)
        else graph.set(v,[e])
    }
    //toplogicalSort
    let visited= new Array(numCourses).fill(false)
    let res=[]
    for(let i=0;i<numCourses;i++){
        if(visited[i]==false && dfs(i,visited,res,graph)) return []
            
    }
    return res
};