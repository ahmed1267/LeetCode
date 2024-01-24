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
var pseudoPalindromicPaths  = function(root) {
  return paths(root,0)  
};

function paths(node, path){
    if(!node) return 0
    path ^= 1 << node.val
    if(!node.left && !node.right){
        return (path & (path-1)) == 0? 1 : 0
    }

    return paths(node.left, path) + paths(node.right, path)
}