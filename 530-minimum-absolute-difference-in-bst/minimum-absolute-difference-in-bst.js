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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    
    var dfs =function(node,lo,hi){
        if(!node) return hi-lo
        let left= dfs(node.left,lo,node.val)
        let right= dfs(node.right,node.val,hi)
        return Math.min(left,right)
    }
    return dfs(root,-Infinity,Infinity)
};