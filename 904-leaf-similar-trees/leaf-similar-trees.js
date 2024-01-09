/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function dfs(root,leaves){
        if(!root) return;
        if(!root.left && !root.right) leaves.push(root.val)
        dfs(root.left,leaves)
        dfs(root.right,leaves)
    }

    const leaves1=[]
    const leaves2=[]
    dfs(root1,leaves1)
    dfs(root2,leaves2)
    return JSON.stringify(leaves1) === JSON.stringify(leaves2)
};