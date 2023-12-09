/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res=[]
    var dfs= function(node,path){
        if(node==graph.length-1){
            res.push(path)
            return
        }
        for(let neighbor of graph[node]){
            dfs(neighbor,[...path,neighbor])
        }
    }

    dfs(0,[0])
    return res
};