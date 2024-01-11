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
var maxAncestorDiff = function(root) {
    if(!root) return 0
    let diff=0
    function dfs(root, min, max){
        if(!root) return
        diff= Math.max(diff, Math.max(Math.abs(min-root.val), Math.abs(max-root.val)))
        max= Math.max(max,root.val)
        min=Math.min(min,root.val)
        dfs(root.left,min,max)
        dfs(root.right,min,max)
    }
    dfs(root,root.val,root.val)
    return diff
};