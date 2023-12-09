/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const nodes=[]

    var inOrder = function(node,x,y){
        if(node){
            inOrder(node.left,x-1,y-1)
            nodes.push([x,y,node.val])
            inOrder(node.right,x+1,y-1)
        }
    }
    inOrder(root,0,0)
    nodes.sort((a,b)=> a[0]-b[0]||b[1]-a[1]||a[2]-b[2])

    let map= new Map()
    for (const [x, y, val] of nodes) {
        if (!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    }
    
    return [...map.values()]
};