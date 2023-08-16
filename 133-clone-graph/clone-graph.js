/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null
    let visited =new Map()
    var dfs= function(node,visited){
        if(visited.has(node)){
            return visited.get(node)
        }
        let newNode= new Node(node.val)
        visited.set(node,newNode)
        for(neighbor of node.neighbors){
            newNode.neighbors.push(dfs(neighbor,visited))
        }
        return newNode
    }
    return dfs(node,visited)

    
};