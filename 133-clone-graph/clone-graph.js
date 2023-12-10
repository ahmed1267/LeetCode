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
    let newNode=new Node(node.val)
    let q=[node]
    let visited =new Map()
    visited.set(node,newNode)
    while(q.length){
        let curr=q.shift()
        for(let nei of curr.neighbors){
            if(!visited.has(nei)){
                let newNei= new Node (nei.val)
                q.push(nei)
                visited.set(nei,newNei)
            }
            visited.get(curr).neighbors.push(visited.get(nei))
        }
    }    
    return newNode
};