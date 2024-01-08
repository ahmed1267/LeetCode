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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum=0
    function dfs(low,high,root){
        if(!root) return
        dfs(low,high,root.left)
        if(root.val>=low && root.val<=high) sum+=root.val
        dfs(low,high,root.right)
    }

    dfs(low,high,root)
    return sum
};