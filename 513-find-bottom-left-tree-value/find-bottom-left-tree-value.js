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
var findBottomLeftValue = function(root) {
    let q=[root]
    let lmv
    while(q.length){
        const curr= q.shift()
        lmv=curr.val
        if(curr.right) q.push(curr.right)
        if(curr.left) q.push(curr.left)
    }
    return lmv
};